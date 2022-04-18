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
  id,
  encoding,
  input,
  outputHandler,
  ringSetting,
}) {
  React.useEffect(() => {
    if (input !== null) {
      let enc = encoding.split('');
      enc = enc.concat(enc.splice(0, ringSetting));

      outputHandler(id, enc[alphabet.indexOf(input)]);
    }
  }, [input]);

  return (
    <div className="Rotor">
      <div>
        {input}
      </div>
      Rotor
      {id}
      <input type="number" min="1" max="26" value={ringSetting + 1} onChange={() => console.log('updating ring setting')} />
    </div>
  );
}

Rotor.propTypes = {
  id: PropTypes.string.isRequired,
  encoding: PropTypes.string.isRequired,
  input: PropTypes.string,
  outputHandler: PropTypes.func.isRequired,
  ringSetting: PropTypes.number.isRequired,
};

Rotor.defaultProps = { input: null };
