import React from 'react';
import RotorAssembly from './RotorAssembly';
import LightPanel from './LightPanel';
import Keyboard from './Keyboard';
import Plugboard from './Plugboard';
import { Reflectors, Rotors } from './Rotor';
import { alphabet } from '../util/alphabet';
import './EnigmaMachine.css';

export default function EnigmaMachine() {
  // setup initial mappings where a letter goes to itself
  const [plugboardMappings, setPlugboardMappings] = React.useState(new Map(
    alphabet.map((alpha) => [alpha, alpha]),
  ));

  // setup initial light map with false representing illumination
  const [lights, setLights] = React.useState(new Map(alphabet.map((alpha) => [alpha, false])));

  const [ringSettings, setRingSettings] = React.useState([0, 0, 0]);

  const rotors = [
    Rotors.EnigmaI.I,
    Rotors.EnigmaI.II,
    Rotors.EnigmaI.III,
  ];

  // FIXME: don't like how this works, nor that it's here. i want it in the rotor assembly component
  const advanceRotors = () => {
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
  };

  const handleKeyPressed = (key) => {
    advanceRotors();

    const plugVal = plugboardMappings.get(key);

    if (plugVal !== null) {
      setLights(new Map(lights.set(plugVal, true)));
    }
  };

  const handleKeyReleased = (key) => {
    const plugVal = plugboardMappings.get(key);

    if (plugVal !== null) {
      setLights(new Map(lights.set(plugVal, false)));
    }
  };

  // this hurts my head. not sure the fix, but likely need to rethink data structure
  const updatePlugMappings = (plug1, plug2) => {
    const mappings = new Map(plugboardMappings);

    const plug1CurrentMapping = mappings.get(plug1);
    const plug2CurrentMapping = mappings.get(plug2);

    if (plug1 === null) {
      console.log('something went wrong');
      return;
    }

    // check if plug is mapped to something other than itself
    if (plug1CurrentMapping !== null && plug1CurrentMapping !== plug1) {
      mappings.set(plug1CurrentMapping, plug1CurrentMapping);
    }
    if (plug2 !== null && plug2CurrentMapping !== plug2 && plug2CurrentMapping !== null) {
      mappings.set(plug2CurrentMapping, plug2CurrentMapping);
    }

    mappings.set(plug1, plug2);

    if (plug2 !== null) {
      mappings.set(plug2, plug1);
    }

    setPlugboardMappings(mappings);
  };

  return (
    <div className="EnigmaMachine container mx-auto">
      <RotorAssembly
        rotors={[
          { rotor: rotors[0], ringSetting: ringSettings[0] },
          { rotor: rotors[1], ringSetting: ringSettings[1] },
          { rotor: rotors[2], ringSetting: ringSettings[2] },
        ]}
        reflector={Reflectors.A}
      />
      <LightPanel
        lights={lights}
      />
      <Keyboard
        keyPressedHandler={handleKeyPressed}
        keyReleasedHandler={handleKeyReleased}
      />
      <Plugboard
        mappings={plugboardMappings}
        updateMappingsFunc={updatePlugMappings}
      />
    </div>
  );
}
