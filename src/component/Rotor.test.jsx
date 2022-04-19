import React from 'react';
import { render } from '@testing-library/react';
import Rotor, { Rotors } from './Rotor';

describe('rotor — forward output', () => {
  const tests = [
    {
      name: 'should return E',
      ringPosition: 0,
      input: 'A',
      expectedOutput: 'E',
    },
    {
      name: 'should return D',
      ringPosition: 0,
      input: 'G',
      expectedOutput: 'D',
    },
    {
      name: 'should return J',
      ringPosition: 1,
      input: 'A',
      expectedOutput: 'J',
    },
    {
      name: 'should return N',
      ringPosition: 8,
      input: 'A',
      expectedOutput: 'N',
    },
    {
      name: 'should return W',
      ringPosition: 25,
      input: 'J',
      expectedOutput: 'W',
    },
    {
      name: 'should return D',
      ringPosition: 25,
      input: 'Z',
      expectedOutput: 'D',
    },
    {
      name: 'should return null',
      ringPosition: 25,
      input: null,
      expectedOutput: null,
    },
  ]

  tests.forEach((test) => {
    it(test.name, () => {
      let output = null;

      const forwardOutputHandler = (id, o) => { output = o; };
      const reverseOutputHandler = () => {};

      render(
        <Rotor
          encoding={Rotors.EnigmaI.I.encoding}
          forwardInput={test.input}
          forwardOutputHandler={forwardOutputHandler}
          id={1}
          reverseOutputHandler={reverseOutputHandler}
          ringPosition={test.ringPosition}
        />,
      );

      expect(output).toBe(test.expectedOutput);
    });
  });
});
