import EntryWheel from './EntryWheel';
import Reflector from './Reflector';
import Rotor from './Rotor';
import classNames from 'classnames';

function RotorAssembly(props) {
  return (
    <div className="RotorAssembly columns-3">
      <Reflector
        id={props.reflector.id}
        encoding={props.reflector.encoding}
      />
      <div
        className={
          classNames(
            'Rotors',
            'columns-'+props.rotors.length,
          )
        }
      >
        {props.rotors.map(r =>
          <Rotor
            key={r.rotor.id}
            id={r.rotor.id}
            encoding={r.rotor.encoding}
            ringSetting={r.ringSetting}
            turnoverNotch={r.rotor.turnoverNotch}
          />
        )}
      </div>
      <EntryWheel/>
    </div>
  );
}

export default RotorAssembly;
