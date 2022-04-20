/* global describe, expect, it */
import { renderHook } from '@testing-library/react';
import { useRotor } from './Rotor';

describe('rotor', () => {
  describe('forward input encoding', () => {
    const tests = [
      {
        ringPosition: 0,
        input: 'A',
        expectedOutput: 'E',
      },
      {
        ringPosition: 1,
        input: 'A',
        expectedOutput: 'J',
      },
      {
        ringPosition: 8,
        input: 'A',
        expectedOutput: 'N',
      },
      {
        ringPosition: 25,
        input: 'J',
        expectedOutput: 'W',
      },
      {
        ringPosition: 25,
        input: 'Z',
        expectedOutput: 'D',
      },
      {
        ringPosition: 0,
        input: null,
        expectedOutput: null,
      },
    ];

    tests.forEach((test) => {
      it(`'${test.input}' should encode to '${test.expectedOutput}' with ring position '${test.ringPosition}'`, () => {
        let output = null;

        const outputHandler = (id, o, r) => { if (!r) { output = o; } };

        renderHook(() => useRotor({
          encoding: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ',
          forwardInput: test.input,
          id: 0,
          outputHandler,
          ringPosition: test.ringPosition,
        }));

        expect(output).toBe(test.expectedOutput);
      });
    });
  });

  describe('reverse input encoding', () => {
    const tests = [
      {
        ringPosition: 0,
        input: 'A',
        expectedOutput: 'T',
      },
      {
        ringPosition: 1,
        input: 'A',
        expectedOutput: 'Z',
      },
      {
        ringPosition: 5,
        input: 'E',
        expectedOutput: 'Z',
      },
      {
        ringPosition: 25,
        input: 'J',
        expectedOutput: 'R',
      },
      {
        ringPosition: 25,
        input: 'Z',
        expectedOutput: 'P',
      },
      {
        ringPosition: 13,
        input: 'N',
        expectedOutput: 'G',
      },
      {
        ringPosition: 0,
        input: null,
        expectedOutput: null,
      },
    ];

    tests.forEach((test) => {
      it(`'${test.input}' should encode to '${test.expectedOutput}' with ring position '${test.ringPosition}'`, () => {
        let output = null;

        const outputHandler = (id, o, r) => { if (r) { output = o; } };

        renderHook(() => useRotor({
          encoding: 'BDFHJLCPRTXVZNYEIWGAKMUSQO',
          reverseInput: test.input,
          id: 0,
          outputHandler,
          ringPosition: test.ringPosition,
        }));

        expect(output).toBe(test.expectedOutput);
      });
    });
  });
});
