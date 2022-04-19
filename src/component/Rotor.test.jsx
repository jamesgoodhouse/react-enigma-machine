import React from 'react';
import { render } from '@testing-library/react';
import Rotor, { Rotors } from './Rotor';

describe('rotor — forward input', () => {
  const tests = [
    {
      name: 'should return E',
      ringPosition: 0,
      input: 'A',
      expectedOutput: 'E',
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

describe('rotor — reverse input', () => {
  const tests = [
    {
      name: 'should return T',
      ringPosition: 0,
      input: 'A',
      expectedOutput: 'T',
    },
    {
      name: 'should return F',
      ringPosition: 1,
      input: 'B',
      expectedOutput: 'F',
    },
    {
      name: 'should return Z',
      ringPosition: 5,
      input: 'E',
      expectedOutput: 'Z',
    },
    {
      name: 'should return R',
      ringPosition: 25,
      input: 'J',
      expectedOutput: 'R',
    },
    {
      name: 'should return P',
      ringPosition: 25,
      input: 'Z',
      expectedOutput: 'P',
    },
    {
      name: 'should return G',
      ringPosition: 13,
      input: 'N',
      expectedOutput: 'G',
    },
    {
      name: 'should return null',
      ringPosition: 13,
      input: null,
      expectedOutput: null,
    },
  ]

  tests.forEach((test) => {
    it(test.name, () => {
      let output = null;

      const forwardOutputHandler = () => {};
      const reverseOutputHandler = (id, o) => { output = o; };

      render(
        <Rotor
          encoding={Rotors.EnigmaI.III.encoding}
          forwardOutputHandler={forwardOutputHandler}
          id={1}
          reverseInput={test.input}
          reverseOutputHandler={reverseOutputHandler}
          ringPosition={test.ringPosition}
        />,
      );

      expect(output).toBe(test.expectedOutput);
    });
  });
});
