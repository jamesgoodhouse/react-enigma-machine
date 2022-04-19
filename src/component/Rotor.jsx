import React from 'react';
import PropTypes from 'prop-types';
import { alphabet } from '../util/alphabet';

export const Rotors = {
  EnigmaI: {
    I: {
      id: 'I',
      encoding: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ',
      turnoverNotch: 'Q',
    },
    II: {
      id: 'II',
      encoding: 'AJDKSIRUXBLHWTMCQGZNPYFVOE',
      turnoverNotch: 'E',
    },
    III: {
      id: 'III',
      encoding: 'BDFHJLCPRTXVZNYEIWGAKMUSQO',
      turnoverNotch: 'V',
    },
  },
};

export const Reflectors = {
  A: {
    id: 'A',
    encoding: 'ENKQAUYWJICOPBLMDXZVFTHRGS',
  },
  B: {
    id: 'B',
    encoding: 'YRUHQSLDPXNGOKMIEBFZCWVJAT',
  },
  C: {
    id: 'C',
    encoding: 'FVPJIAOYEDRZXWGCTKUQSBNMHL',
  },
};

export default function Rotor({
  encoding,
  forwardInput,
  forwardOutputHandler,
  id,
  reverseInput,
  reverseOutputHandler,
  ringPosition,
}) {
  React.useEffect(() => {
    if (forwardInput !== null) {
      console.log('input to rotor %s:', id + 1, forwardInput);
      const index = alphabet.indexOf(forwardInput);
      let indexWithRingPosition = index + ringPosition;

      if (indexWithRingPosition > 25) {
        indexWithRingPosition -= 26;
      }

      const encodingChar = encoding.charAt(indexWithRingPosition);
      const indexOfEncodingChar = alphabet.indexOf(encodingChar);

      let indexOfEncodingCharWithRingPosition = indexOfEncodingChar - ringPosition;

      if (indexOfEncodingCharWithRingPosition < 0) {
        indexOfEncodingCharWithRingPosition += 26;
      }

      const output = alphabet[indexOfEncodingCharWithRingPosition];

      forwardOutputHandler(id, output);
    }
  }, [forwardInput]);

  React.useEffect(() => {
    if (reverseInput !== null) {
      console.log('input to rotor %s:', id + 1, reverseInput);
      reverseOutputHandler(null);
    }
  }, [reverseInput]);

  return (
    <div className="Rotor">
      Rotor
      <input type="number" min="1" max="26" value={ringPosition + 1} onChange={() => console.log('updating ring setting')} />
    </div>
  );
}

Rotor.propTypes = {
  encoding: PropTypes.string.isRequired,
  forwardInput: PropTypes.string,
  forwardOutputHandler: PropTypes.func.isRequired,
  reverseInput: PropTypes.string,
  reverseOutputHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  ringPosition: PropTypes.number.isRequired,
};

Rotor.defaultProps = {
  forwardInput: null,
  reverseInput: null,
};
