import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EntryWheel from './EntryWheel';
import Reflector from './Reflector';
import Rotor from './Rotor';

export default function RotorAssembly({ rotors, reflector }) {
  return (
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
        {rotors.map((r) => (
          <Rotor
            key={r.rotor.id}
            id={r.rotor.id}
            encoding={r.rotor.encoding}
            ringSetting={r.ringSetting}
            turnoverNotch={r.rotor.turnoverNotch}
          />
        ))}
      </div>
      <EntryWheel />
    </div>
  );
}

RotorAssembly.propTypes = {
  reflector: PropTypes.shape({
    id: PropTypes.string.isRequired,
    encoding: PropTypes.string.isRequired,
  }).isRequired,
  rotors: PropTypes.arrayOf(
    PropTypes.shape({
      ringSetting: PropTypes.number.isRequired,
      rotor: PropTypes.shape({
        id: PropTypes.string.isRequired,
        encoding: PropTypes.string.isRequired,
        turnoverNotch: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};
