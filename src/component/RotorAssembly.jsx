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
  const [ringSettings, setRingSettings] = React.useState(new Array(rotors.length).fill(0));
  const [ringInputs, setRingInputs] = React.useState(new Map(
    rotors.map((rotor) => [rotor.id, null]),
  ));

  React.useEffect(() => {
    console.log('rotor assembly input:', input);

    if (input !== null) {
      const rs = ringSettings.slice();

      if (rs[0] < 25) {
        rs[0] += 1;
      } else {
        rs[0] = 0;
      }
      if (ringSettings[0] === rotors[0].encoding.indexOf(rotors[0].turnoverNotch)) {
        if (rs[1] < 25) {
          rs[1] += 1;
        } else {
          rs[1] = 0;
        }
        if (ringSettings[1] === rotors[1].encoding.indexOf(rotors[1].turnoverNotch)) {
          if (rs[2] < 25) {
            rs[2] += 1;
          } else {
            rs[2] = 0;
          }
        }
      }

      setRingSettings(rs);

      // must come after setting the rings
      setRingInputs(new Map(ringInputs.set(rotors[0].id, input)));
    } else {
      setRingInputs(new Map(rotors.map((rotor) => [rotor.id, null])));
    }

    outputHandler('F');
  }, [input]);

  const handleRotorOutput = (id, output) => {
    console.log('setting %s output to', id, output);
    setRingInputs(new Map(ringInputs.set(id, output)));
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
          <Rotor
            key={rotor.id}
            encoding={rotor.encoding}
            id={rotor.id}
            input={ringInputs.get(rotor.id)}
            outputHandler={handleRotorOutput}
            ringSetting={ringSettings[i]}
          />
        ))}
      </div>
      <Reflector
        id={reflector.id}
        encoding={reflector.encoding}
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
