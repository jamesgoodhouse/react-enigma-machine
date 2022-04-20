/* global describe, expect, it */
import React from 'react';
import { render } from '@testing-library/react';
import Reflector from './Reflector';

describe('reflector', () => {
  const tests = [
    {
      input: 'A',
      expectedOutput: 'Y',
    },
    {
      input: 'E',
      expectedOutput: 'Q',
    },
    {
      input: 'Z',
      expectedOutput: 'T',
    },
    {
      input: null,
      expectedOutput: null,
    },
  ];

  tests.forEach((test) => {
    it(`'${test.input}' should encode to '${test.expectedOutput}'`, () => {
      let output = null;

      const outputHandler = (o) => { output = o; };

      render(
        <Reflector
          encoding="YRUHQSLDPXNGOKMIEBFZCWVJAT"
          id="reflector"
          input={test.input}
          outputHandler={outputHandler}
        />,
      );

      expect(output).toBe(test.expectedOutput);
    });
  });
});
