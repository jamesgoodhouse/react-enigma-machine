import React from 'react';
import classNames from 'classnames';
import './Plugboard.css';

function Plugboard(props) {
  const [initialPlugConnection, setInitialPlugConnection] = React.useState(null)
  const plugComponents = []

  const handlePlugClick = (plug, connectedTo) => {
    let plugMapping = [initialPlugConnection, plug]
    let plugConnection = null

    if (initialPlugConnection === null && plug !== connectedTo) {
      plugMapping = [plug, plug]
    } else if (initialPlugConnection === null) {
      plugConnection = plug
      plugMapping = [plug, null]
    } else if (initialPlugConnection === plug) {
      plugMapping = [plug, plug]
    }

    setInitialPlugConnection(plugConnection)
    props.updateMappingsFunc(...plugMapping)
  }

  for (const [k, v] of props.mappings) {
    plugComponents.push(
      <Plug
        key={k}
        letter={k}
        connectedTo={v}
        onClick={(plug) => handlePlugClick(plug, v)}
      />
    )
  }

  return (
    <div className="Plugboard">
      Plug Board
      {plugComponents}
    </div>
  );
}

function Plug(props) {
  const letter = props.letter;
  const connectedTo = props.connectedTo;
  const connected = connectedTo !== null && letter !== connectedTo;
  const connecting = connectedTo === null;

  return (
    <div
      className={
        classNames(
          "Plug",
          {
            connected: connected,
            connecting: connecting,
          },
        )
      }
      onClick={() => props.onClick(letter)}
    >
      {letter} (connects {letter} to {connectedTo === null ? '?' : connectedTo})
    </div>
  )
}

export default Plugboard;
