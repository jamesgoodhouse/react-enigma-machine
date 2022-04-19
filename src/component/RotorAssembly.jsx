import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Reflector from './Reflector';
import Rotor from './Rotor';

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

  const incrementRotor = (rp) => {
    let rotorPos = rp;
    if (rotorPos < 25) { rotorPos += 1; } else { rotorPos = 0; }
    return rotorPos;
  };

  const incrementRotors = () => {
    const rs = rotorRingPositions.slice();
    console.log('incrementing rotor 1');

    rs[0] = incrementRotor(rs[0]);
    if (rotorRingPositions[0] === rotors[0].encoding.indexOf(rotors[0].turnoverNotch)) {
      console.log('incrementing rotor 2');
      rs[1] = incrementRotor(rs[1]);
      if (rotorRingPositions[1] === rotors[1].encoding.indexOf(rotors[1].turnoverNotch)) {
        console.log('incrementing rotor 3');
        rs[2] = incrementRotor(rs[2]);
      }
    }

    setRotorRingPositions(rs);
  };

  const handleRotorOutput = (id, output) => {
    const nextRotor = id + 1;
    if (nextRotor >= rotors.length) {
      return;
    }

    console.log('setting rotor %s (i=%s) input to', nextRotor + 1, nextRotor, output);
    const inputs = rotorForwardInputs.slice();
    inputs[nextRotor] = output;

    setRotorForwardInputs(inputs);
  };

  const handleReflectorOutput = (output) => {
    console.log(output);
  };

  React.useEffect(() => {
    console.log('rotor assembly input:', input);

    if (input !== null) {
      incrementRotors();

      // must come after setting the rings
      console.log('setting rotor %s (i=0) input to', 1, input);
      setRotorForwardInputs([input, null, null]);
    } else {
      setRotorForwardInputs([null, null, null]);
    }

    outputHandler('F');
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
            ringPosition={rotorRingPositions[i]}
          />
        ))}
      </div>
      <Reflector
        encoding={reflector.encoding}
        id={reflector.id}
        input={rotorForwardInputs[rotorForwardInputs.length - 1]}
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
