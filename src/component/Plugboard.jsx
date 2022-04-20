import React from 'react';
import PropTypes from 'prop-types';
import Plug from './Plug';
import { alphabet } from '../util/alphabet';
import './Plugboard.css';

export default function Plugboard({
  inputFromKeyboard,
  inputFromRotorAssembly,
  outputToLightPanelHandler,
  outputToRotorAssemblyHandler,
}) {
  const [initialPlugConnection, setInitialPlugConnection] = React.useState(null);

  // setup initial mappings where a letter goes to itself
  const [plugboardMappings, setPlugboardMappings] = React.useState(new Map(
    alphabet.map((alpha) => [alpha, alpha]),
  ));

  React.useEffect(() => {
    let output = null;

    if (inputFromKeyboard !== null) {
      console.log('input to plugboard from keyboard:', inputFromKeyboard);
      output = plugboardMappings.get(inputFromKeyboard);
      console.log('output from plugboard to rotor assembly:', output);
    }

    outputToRotorAssemblyHandler(output);
  }, [inputFromKeyboard]);

  React.useEffect(() => {
    let output = null;

    if (inputFromRotorAssembly !== null) {
      console.log('input to plugboard from rotor assembly:', inputFromRotorAssembly);
      output = plugboardMappings.get(inputFromRotorAssembly);
      console.log('output from plugboard to light panel:', output);
    }

    outputToLightPanelHandler(output);
  }, [inputFromRotorAssembly]);

  const handlePlugClick = (plug, connectedTo) => {
    let plugMapping = [initialPlugConnection, plug];
    let plugConnection = null;

    if (initialPlugConnection === null && plug !== connectedTo) {
      plugMapping = [plug, plug];
    } else if (initialPlugConnection === null) {
      plugConnection = plug;
      plugMapping = [plug, null];
    } else if (initialPlugConnection === plug) {
      plugMapping = [plug, plug];
    }

    setInitialPlugConnection(plugConnection);

    const mappings = new Map(plugboardMappings);

    const plug1CurrentMapping = mappings.get(plugMapping[0]);
    const plug2CurrentMapping = mappings.get(plugMapping[1]);

    if (plugMapping[0] === null) {
      console.log('something went wrong');
      return;
    }

    // check if plug is mapped to something other than itself
    if (plug1CurrentMapping !== null && plug1CurrentMapping !== plugMapping[0]) {
      mappings.set(plug1CurrentMapping, plug1CurrentMapping);
    }
    // eslint-disable-next-line max-len
    if (plugMapping[1] !== null && plug2CurrentMapping !== plugMapping[1] && plug2CurrentMapping !== null) {
      mappings.set(plug2CurrentMapping, plug2CurrentMapping);
    }

    mappings.set(plugMapping[0], plugMapping[1]);

    if (plugMapping[1] !== null) {
      mappings.set(plugMapping[1], plugMapping[0]);
    }

    setPlugboardMappings(mappings);
  };

  return (
    <div className="Plugboard">
      Plug Board
      {[...plugboardMappings.keys()].map((k) => (
        <Plug
          key={k}
          letter={k}
          connectedTo={plugboardMappings.get(k)}
          plugHandler={handlePlugClick}
        />
      ))}
    </div>
  );
}

Plugboard.propTypes = {
  inputFromKeyboard: PropTypes.string,
  inputFromRotorAssembly: PropTypes.string,
  outputToLightPanelHandler: PropTypes.func.isRequired,
  outputToRotorAssemblyHandler: PropTypes.func.isRequired,
};

Plugboard.defaultProps = {
  inputFromKeyboard: null,
  inputFromRotorAssembly: null,
};
