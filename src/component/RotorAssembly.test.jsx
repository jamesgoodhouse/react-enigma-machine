import React from 'react';
import { render } from '@testing-library/react';
import RotorAssembly from './RotorAssembly';
import { Rotors } from './Rotor';
import { Reflectors } from './Reflector';

describe('rotor assembly — input', () => {
  const tests = [
    {
      name: 'should return F',
      input: 'A',
      expectedOutput: 'F',
    },
    {
      name: 'should return Y',
      input: 'G',
      expectedOutput: 'Y',
    },
    {
      name: 'should return R',
      input: 'J',
      expectedOutput: 'R',
    },
  ]

  tests.forEach((test) => {
    it(test.name, () => {
      let output = null;

      const outputHandler = (o) => { output = o; };

      render(
        <RotorAssembly
          input={test.input}
          outputHandler={outputHandler}
          reflector={Reflectors.B}
          rotors={[
            Rotors.EnigmaI.I,
            Rotors.EnigmaI.II,
            Rotors.EnigmaI.III,
          ]}
        />,
      );

      expect(output).toBe(test.expectedOutput);
    });
  });
});
