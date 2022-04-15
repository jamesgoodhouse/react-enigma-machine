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
        {props.rotors.map(rotor =>
          <Rotor
            key={rotor.id}
            id={rotor.id}
            encoding={rotor.encoding}
            turnoverNotch={rotor.turnoverNotch}
          />
        )}
      </div>
      <EntryWheel/>
    </div>
  );
}

export default RotorAssembly;
