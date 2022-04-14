import EntryWheel from './EntryWheel';
import Reflector from './Reflector';
import Rotor from './Rotor';

function RotorAssembly(props) {
  return (
    <div className="RotorAssembly">
      <EntryWheel/>
      <div className="Rotors">
        {props.rotors.map(rotor =>
          <Rotor
            key={rotor.id}
            id={rotor.id}
            encoding={rotor.encoding}
            turnoverNotch={rotor.turnoverNotch}
          />
        )}
      </div>
      <Reflector
        id={props.reflector.id}
        encoding={props.reflector.encoding}
      />
    </div>
  );
}

export default RotorAssembly;
