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
  const [ringPositions, setRingPositions] = React.useState(new Array(rotors.length).fill(0));
  const [rotorInputs, setRotorInputs] = React.useState([null, null, null]);

  React.useEffect(() => {
    console.log('rotor assembly input:', input);

    if (input !== null) {
      const rs = ringPositions.slice();
      console.log('incrementing rotor 1');

      if (rs[0] < 25) {
        rs[0] += 1;
      } else {
        rs[0] = 0;
      }
      if (ringPositions[0] === rotors[0].encoding.indexOf(rotors[0].turnoverNotch)) {
        console.log('incrementing rotor 2');
        if (rs[1] < 25) {
          rs[1] += 1;
        } else {
          rs[1] = 0;
        }
        if (ringPositions[1] === rotors[1].encoding.indexOf(rotors[1].turnoverNotch)) {
          console.log('incrementing rotor 3');
          if (rs[2] < 25) {
            rs[2] += 1;
          } else {
            rs[2] = 0;
          }
        }
      }

      setRingPositions(rs);

      // must come after setting the rings
      console.log('setting rotor %s (i=0) input to', 1, input);
      setRotorInputs([input, null, null]);
    } else {
      setRotorInputs([null, null, null]);
    }

    outputHandler('F');
  }, [input]);

  const handleRotorOutput = (id, output) => {
    const nextRotor = id + 1;
    if (nextRotor >= rotors.length) {
      return;
    }

    console.log('setting rotor %s (i=%s) input to', nextRotor + 1, nextRotor, output);
    const inputs = rotorInputs.slice();
    inputs[nextRotor] = output;

    setRotorInputs(inputs);
  };

  const handleReflectorOutput = (output) => {
    console.log(output);
  };

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
          // i know this is not ideal to use the index for a key, but the rotor list won't be
          // changing at this point, and this will help out determining rotor order
          <Rotor
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            encoding={rotor.encoding}
            id={i}
            input={rotorInputs[i]}
            outputHandler={handleRotorOutput}
            ringPosition={ringPositions[i]}
          />
        ))}
      </div>
      <Reflector
        encoding={reflector.encoding}
        id={reflector.id}
        input={rotorInputs[rotorInputs.length - 1]}
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
