import React from 'react';
import PropTypes from 'prop-types';
import Plug from './Plug';
import './Plugboard.css';

export default function Plugboard({ mappings, updateMappingsFunc }) {
  const [initialPlugConnection, setInitialPlugConnection] = React.useState(null);

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
    updateMappingsFunc(...plugMapping);
  };

  return (
    <div className="Plugboard">
      Plug Board
      {[...mappings.keys()].map((k) => (
        <Plug
          key={k}
          letter={k}
          connectedTo={mappings.get(k)}
          plugHandler={handlePlugClick}
        />
      ))}
    </div>
  );
}

Plugboard.propTypes = {
  mappings: PropTypes.instanceOf(Map).isRequired,
  updateMappingsFunc: PropTypes.func.isRequired,
};
