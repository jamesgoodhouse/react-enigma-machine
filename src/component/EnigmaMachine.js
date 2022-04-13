import React from 'react';
import LightPanel from './LightPanel';
import Keyboard from './Keyboard';
import Plugboard from './Plugboard';
import './EnigmaMachine.css';

function EnigmaMachine() {
  const alphaCodes = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = alphaCodes.map((e, i) => i + 97).map((x) => String.fromCharCode(x));

  const [plugboardMappings, setPlugboardMappings] = React.useState(new Map(
    alphabet.map((alpha) => [alpha, alpha]),
  ));

  const [lights, setLights] = React.useState(new Map(
    alphabet.map(alpha => [alpha, false])
  ));

  const handleKeyPressed = (key) => {
    const plugVal = plugboardMappings.get(key)
    const l = new Map(lights)
    l.set(plugVal, true)
    setLights(l)
  }

  const handleKeyReleased = (key) => {
    const l = new Map(
      alphabet.map(alpha => [alpha, false])
    )
    setLights(l)
  }

  const updatePlugMappings = (plug1, plug2) => {
    let mappings = new Map(plugboardMappings)

    const plug1Mapping = mappings.get(plug1)
    const plug2Mapping = mappings.get(plug2)

    if (plug1Mapping !== null && plug1Mapping !== plug1) {
      mappings.set(plug1Mapping, plug1Mapping)
    }
    if (plug2 !== null && plug2Mapping !== plug2) {
      mappings.set(plug2Mapping, plug2Mapping)
    }

    mappings.set(plug1, plug2)

    if (plug2 !== null ) {
      mappings.set(plug2, plug1)
    }

    setPlugboardMappings(mappings)
  }

  return (
    <div className="EnigmaMachine">
      <LightPanel
        lights={lights}
      />
      <Keyboard
        onKeyDown={key => handleKeyPressed(key)}
        onKeyUp={key => handleKeyReleased(key)}
      />
      <Plugboard
        mappings={plugboardMappings}
        updateMappingsFunc={updatePlugMappings}
      />
    </div>
  );
}

export default EnigmaMachine;
