import EntryWheel from './EntryWheel';
import Reflector from './Reflector';
import Rotor from './Rotor';

function RotorAssembly(props) {
  return (
    <div className="RotorAssembly">
      <EntryWheel/>
      <div className="Rotors">
        <Rotor/>
        <Rotor/>
        <Rotor/>
      </div>
      <Reflector/>
    </div>
  );
}

export default RotorAssembly;
