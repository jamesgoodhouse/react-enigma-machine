import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EntryWheel from './EntryWheel';
import Reflector from './Reflector';
import Rotor from './Rotor';

function RotorAssembly({ rotors, reflector }) {
  const [ringSettings, setRingSettings] = React.useState([1, 1, 1]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="RotorAssembly columns-3">
      <Reflector
        id={reflector.id}
        encoding={reflector.encoding}
      />
      <div
        className={
          classNames(
            'Rotors',
            `columns-${rotors.length}`,
          )
        }
      >
        {rotors.map((rotor) => (
          <Rotor
            key={rotor.id}
            id={rotor.id}
            encoding={rotor.encoding}
            turnoverNotch={rotor.turnoverNotch}
          />
        ))}
      </div>
      <EntryWheel />
    </div>
  );
}

RotorAssembly.propTypes = {
  rotors: PropTypes.arrayOf(PropTypes.number).isRequired,
  reflector: PropTypes.string.isRequired,
};

export default RotorAssembly;
