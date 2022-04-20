import React from 'react';
import RotorAssembly from './RotorAssembly';
import LightPanel from './LightPanel';
import Keyboard from './Keyboard';
import Plugboard from './Plugboard';
import { Rotors } from './Rotor';
import { Reflectors } from './Reflector';
import './EnigmaMachine.css';

export default function EnigmaMachine() {
  const [currentKeyPressed, setCurrentKeyPressed] = React.useState(null);
  const [plugboardRotorAssemblyOutput, setPlugboardRotorAssemblyOutput] = React.useState(null);
  const [plugboardLightPanelOutput, setPlugboardLightPanelOutput] = React.useState(null);
  const [rotorAssemblyOutput, setRotorAssemblyOutput] = React.useState(null);

  return (
    <div className="EnigmaMachine container mx-auto">
      <RotorAssembly
        input={plugboardRotorAssemblyOutput}
        outputHandler={setRotorAssemblyOutput}
        reflector={Reflectors.B}
        rotors={[
          Rotors.EnigmaI.I,
          Rotors.EnigmaI.II,
          Rotors.EnigmaI.III,
        ]}
      />
      <LightPanel illuminatedLight={plugboardLightPanelOutput} />
      <Keyboard currentKeyHandler={setCurrentKeyPressed} />
      <Plugboard
        inputFromKeyboard={currentKeyPressed}
        inputFromRotorAssembly={rotorAssemblyOutput}
        outputToRotorAssemblyHandler={setPlugboardRotorAssemblyOutput}
        outputToLightPanelHandler={setPlugboardLightPanelOutput}
      />
    </div>
  );
}
