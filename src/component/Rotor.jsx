import React from 'react';
import PropTypes from 'prop-types';
import { alphabet } from '../util/alphabet';
import log from '../middleware/logger';

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

export const useRotor = ({
  encoding,
  forwardInput,
  id,
  reverseInput,
  outputHandler,
  ringPosition,
}) => {
  const encode = (input, reverse) => {
    const index = alphabet.indexOf(input);
    let indexWithRingPosition = index + ringPosition;

    if (indexWithRingPosition > 25) {
      indexWithRingPosition -= 26;
    }

    let encodingChar = encoding.charAt(indexWithRingPosition);
    let indexOfEncodedChar = alphabet.indexOf(encodingChar);

    if (reverse) {
      encodingChar = alphabet[indexWithRingPosition];
      indexOfEncodedChar = encoding.indexOf(encodingChar);
    }

    let indexOfEncodedCharWithRingPosition = indexOfEncodedChar - ringPosition;

    if (indexOfEncodedCharWithRingPosition < 0) {
      indexOfEncodedCharWithRingPosition += 26;
    }

    return alphabet[indexOfEncodedCharWithRingPosition];
  };

  const encodeForward = (input) => encode(input, false);
  const encodeReverse = (input) => encode(input, true);

  React.useEffect(() => {
    let output = null;

    if (forwardInput !== null) {
      log.debug('input to rotor %s:', id + 1, forwardInput);
      output = encodeForward(forwardInput);
    }

    outputHandler(id, output, false);
  }, [forwardInput]);

  React.useEffect(() => {
    let output = null;

    if (reverseInput !== null) {
      log.debug('reverse input to rotor %s:', id + 1, reverseInput);
      output = encodeReverse(reverseInput);
    }

    outputHandler(id, output, true);
  }, [reverseInput]);

  return {
    ringPosition,
  };
};

export default function Rotor({
  encoding,
  forwardInput,
  id,
  reverseInput,
  outputHandler,
  ringPosition,
}) {
  const rotor = useRotor({
    encoding,
    forwardInput,
    id,
    reverseInput,
    outputHandler,
    ringPosition,
  });

  return (
    <div className="Rotor">
      Rotor
      <input type="number" min="1" max="26" value={rotor.ringPosition + 1} onChange={() => log.debug('updating ring setting')} />
    </div>
  );
}

Rotor.propTypes = {
  encoding: PropTypes.string.isRequired,
  forwardInput: PropTypes.string,
  reverseInput: PropTypes.string,
  outputHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  ringPosition: PropTypes.number.isRequired,
};

Rotor.defaultProps = {
  forwardInput: null,
  reverseInput: null,
};
