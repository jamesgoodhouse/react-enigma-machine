import React from 'react';
import RotorAssembly from './RotorAssembly';
// import LightPanel from './LightPanel';
import Keyboard from './Keyboard';
import Plugboard from './Plugboard';
import { Reflectors, Rotors } from './Rotor';
import './EnigmaMachine.css';

export default function EnigmaMachine() {
  const [currentKeyPressed, setCurrentKeyPressed] = React.useState(null);
  const [plugboardRotorAssemblyOutput, setPlugboardRotorAssemblyOutput] = React.useState(null);
  const [plugboardLightPanelOutput, setPlugboardLightPanelOutput] = React.useState(null);
  const [rotorAssemblyOutput, setRotorAssemblyOutput] = React.useState(null);

  return (
    <div className="EnigmaMachine container mx-auto">
      <div>
        {plugboardLightPanelOutput}
      </div>
      <RotorAssembly
        input={plugboardRotorAssemblyOutput}
        outputHandler={setRotorAssemblyOutput}
        reflector={Reflectors.A}
        rotors={[
          Rotors.EnigmaI.I,
          Rotors.EnigmaI.II,
          Rotors.EnigmaI.III,
        ]}
      />
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
