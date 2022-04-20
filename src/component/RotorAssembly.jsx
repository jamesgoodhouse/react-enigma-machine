import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import log from '../middleware/logger';
import Reflector from './Reflector';
import Rotor from './Rotor';
import { alphabet } from '../util/alphabet';

export default function RotorAssembly({
  input,
  outputHandler,
  reflector,
  rotors,
}) {
  const [
    rotorRingPositions,
    setRotorRingPositions,
  ] = React.useState(new Array(rotors.length).fill(0));

  const [
    rotorForwardInputs,
    setRotorForwardInputs,
  ] = React.useState([null, null, null]);

  const [
    rotorReverseInputs,
    setRotorReverseInputs,
  ] = React.useState([null, null, null]);

  const [reflectorInput, setReflectorInput] = React.useState(null);

  const incrementRotor = (rp) => (rp < 25 ? rp + 1 : 0);

  const incrementRotors = () => {
    const rs = rotorRingPositions.slice();
    log.debug('incrementing rotor 1');

    rs[0] = incrementRotor(rs[0]);
    if (rotorRingPositions[0] === alphabet.indexOf(rotors[0].turnoverNotch)) {
      log.debug('incrementing rotor 2');
      rs[1] = incrementRotor(rs[1]);
      if (rotorRingPositions[1] === alphabet.indexOf(rotors[1].turnoverNotch)) {
        log.debug('incrementing rotor 3');
        rs[2] = incrementRotor(rs[2]);
      }
    }

    setRotorRingPositions(rs);
  };

  const handleRotorOutput = (id, output, isReverse) => {
    const nextRotor = isReverse ? id - 1 : id + 1;

    if (isReverse && nextRotor < 0) {
      outputHandler(output);
      return;
    }

    if (nextRotor >= rotors.length) {
      setReflectorInput(output);
      return;
    }

    const inputs = isReverse ? rotorReverseInputs.slice() : rotorForwardInputs.slice();
    inputs[nextRotor] = output;

    if (isReverse) {
      setRotorReverseInputs(inputs);
    } else {
      setRotorForwardInputs(inputs);
    }
  };

  const handleReflectorOutput = (output) => {
    setRotorReverseInputs([null, null, output]);
  };

  React.useEffect(() => {
    let inputs = [null, null, null];

    if (input !== null) {
      log.debug('rotor assembly input:', input);

      incrementRotors();

      // must come after setting the rings
      inputs = [input, null, null];
    }

    setRotorForwardInputs(inputs);
  }, [input]);

  return (
    <div className="RotorAssembly columns-3">
      <div
        className={
          classNames(
            'Rotors',
            `columns-${rotors.length}`,
          )
        }
      >
        {rotors.map((rotor, i) => (
          <Rotor
            encoding={rotor.encoding}
            forwardInput={rotorForwardInputs[i]}
            id={i}
            // i know this is not ideal to use the index for a key, but the rotor list won't be
            // changing at this point, and this will help out determining rotor order
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            outputHandler={handleRotorOutput}
            reverseInput={rotorReverseInputs[i]}
            ringPosition={rotorRingPositions[i]}
          />
        ))}
      </div>
      <Reflector
        encoding={reflector.encoding}
        id={reflector.id}
        input={reflectorInput}
        outputHandler={handleReflectorOutput}
      />
    </div>
  );
}

RotorAssembly.propTypes = {
  input: PropTypes.string,
  outputHandler: PropTypes.func.isRequired,
  reflector: PropTypes.shape({
    id: PropTypes.string.isRequired,
    encoding: PropTypes.string.isRequired,
  }).isRequired,
  rotors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      encoding: PropTypes.string.isRequired,
      turnoverNotch: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

RotorAssembly.defaultProps = { input: null };
