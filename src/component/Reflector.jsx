import React from 'react';
import PropTypes from 'prop-types';
import { alphabet } from '../util/alphabet';

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

export default function Reflector({
  encoding,
  id,
  input,
  outputHandler,
}) {
  React.useEffect(() => {
    if (input !== null) {
      console.log('input to reflector:', input);
      const index = alphabet.indexOf(input);
      outputHandler(encoding.charAt(index));
    }
  }, [input]);

  return (
    <div className="Reflector">
      Reflector
      {id}
    </div>
  );
}

Reflector.propTypes = {
  encoding: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  input: PropTypes.string,
  outputHandler: PropTypes.func.isRequired,
};

Reflector.defaultProps = { input: null };
