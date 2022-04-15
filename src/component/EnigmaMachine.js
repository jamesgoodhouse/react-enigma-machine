import React from 'react';
import RotorAssembly from './RotorAssembly';
import LightPanel from './LightPanel';
import Keyboard from './Keyboard';
import Plugboard from './Plugboard';
import { Reflectors,Rotors } from './Rotor';
import { alphabet } from './../util/alphabet';
import './EnigmaMachine.css';

function EnigmaMachine() {
  // setup initial mappings where a letter goes to itself
  const [plugboardMappings, setPlugboardMappings] = React.useState(new Map(
    alphabet.map((alpha) => [alpha, alpha]),
  ));

  // setup initial light map with false representing illumination
  const [lights, setLights] = React.useState(new Map(
    alphabet.map(alpha => [alpha, false])
  ));

  const handleKeyPressed = (key) => {
    const plugVal = plugboardMappings.get(key)

    if (plugVal !== null) {
      setLights(new Map(lights.set(plugVal, true)))
    }
  }

  const handleKeyReleased = (key) => {
    const plugVal = plugboardMappings.get(key)

    if (plugVal !== null) {
      setLights(new Map(lights.set(plugVal, false)))
    }
  }

  // this hurts my head. not sure the fix, but likely need to rethink data structure
  const updatePlugMappings = (plug1, plug2) => {
    let mappings = new Map(plugboardMappings)

    const plug1CurrentMapping = mappings.get(plug1)
    const plug2CurrentMapping = mappings.get(plug2)

    if (plug1 === null) {
      console.log('something went wrong')
      return
    }

    // check if plug is mapped to something other than itself
    if (plug1CurrentMapping !== null && plug1CurrentMapping !== plug1) {
      mappings.set(plug1CurrentMapping, plug1CurrentMapping)
    }
    if (plug2 !== null && plug2CurrentMapping !== plug2 && plug2CurrentMapping !== null) {
      mappings.set(plug2CurrentMapping, plug2CurrentMapping)
    }

    mappings.set(plug1, plug2)

    if (plug2 !== null ) {
      mappings.set(plug2, plug1)
    }

    setPlugboardMappings(mappings)
  }

  return (
    <div className="EnigmaMachine container mx-auto">
      <RotorAssembly
        rotors={[
          Rotors.EnigmaI.I,
          Rotors.EnigmaI.II,
          Rotors.EnigmaI.III,
        ]}
        reflector={Reflectors.A}
      />
      <LightPanel
        lights={lights}
      />
      <Keyboard
        onKeyDown={handleKeyPressed}
        onKeyUp={handleKeyReleased}
      />
      <Plugboard
        mappings={plugboardMappings}
        updateMappingsFunc={updatePlugMappings}
      />
    </div>
  );
}

export default EnigmaMachine;
