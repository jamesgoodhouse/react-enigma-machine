import React from 'react';
import { render } from '@testing-library/react';
import { Reflectors } from './Rotor';
import Reflector from './Reflector';

describe('reflector — output', () => {
  const tests = [
    {
      name: 'should return Y',
      input: 'A',
      expectedOutput: 'Y',
    },
    {
      name: 'should return Q',
      input: 'E',
      expectedOutput: 'Q',
    },
    {
      name: 'should return T',
      input: 'Z',
      expectedOutput: 'T',
    },
    {
      name: 'should return null',
      input: null,
      expectedOutput: null,
    },
  ];

  tests.forEach((test) => {
    it(test.name, () => {
      let output = null;

      const outputHandler = (o) => { output = o; };

      render(
        <Reflector
          encoding={Reflectors.B.encoding}
          id="reflector"
          input={test.input}
          outputHandler={outputHandler}
        />,
      );

      expect(output).toBe(test.expectedOutput);
    });
  });
});
