import React from 'react';
import {default as SimpleKeyboard} from 'react-simple-keyboard';
import classNames from 'classnames';
import "react-simple-keyboard/build/css/index.css";
import './EnigmaMachine.css';

function EnigmaMachine() {
  const alphaCodes = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = alphaCodes.map((e, i) => i + 97).map((x) => String.fromCharCode(x));

  const [plugBoardMappings, setPlugBoardMappings] = React.useState(new Map(
    alphabet.map((alpha) => [alpha, alpha]),
  ));

  const updatePlugMappings = (plug1, plug2) => {
    let mappings = new Map(plugBoardMappings)

    const plug1Mapping = mappings.get(plug1)
    const plug2Mapping = mappings.get(plug2)

    if (plug1Mapping !== plug1) {
      mappings.set(plug1Mapping, plug1Mapping)
    }
    if (plug2 !== null && plug2Mapping !== plug2) {
      mappings.set(plug2Mapping, plug2Mapping)
    }

    mappings.set(plug1, plug2)

    if (plug2 !== null ) {
      mappings.set(plug2, plug1)
    }

    setPlugBoardMappings(mappings)
  }

  return (
    <div className="EnigmaMachine">
      <LightBoard/>
      <Keyboard/>
      <PlugBoard
        mappings={plugBoardMappings}
        updateMappingsFunc={updatePlugMappings}
      />
    </div>
  );
}

function LightBoard() {
  return (
    <div className="LightBoard">
      Light Board
    </div>
  );
}

function PlugBoard(props) {
  const [initialPlugConnection, setInitialPlugConnection] = React.useState(null)
  const [currentlyConnectingPlugs, setCurrentlyConnectingPlugs] = React.useState(false)
  const plugComponents = []

  const handlePlugClick = (plug) => {
    let currentlyConnecting = false
    let plugs = [initialPlugConnection, plug]

    if (!currentlyConnectingPlugs) {
      currentlyConnecting = true
      setInitialPlugConnection(plug)
      plugs = [plug, null]
    } else if (initialPlugConnection === plug) {
      setCurrentlyConnectingPlugs(false)
      plugs = [plug, plug]
    }

    setCurrentlyConnectingPlugs(currentlyConnecting)
    props.updateMappingsFunc(...plugs)
  }

  for (const [k, v] of props.mappings) {
    plugComponents.push(
      <Plug
        key={k}
        letter={k}
        connectedTo={v}
        onClick={(letter) => handlePlugClick(letter)}
      />
    )
  }

  return (
    <div className="PlugBoard">
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
      {letter} (connects {letter} to {connectedTo})
    </div>
  )
}

function Keyboard() {
  const [button, setButton] = React.useState("");

  const layout = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  const onKeyReleased = button => {
    console.log("simple-keyboard button released", button)
    setButton("")
  };

  const onKeyPress = keyPressed => {
    if (keyPressed === button) {
      console.log("ignoring", keyPressed);
      return
    }
    setButton(keyPressed);
  };

  return (
    <div className="Keyboard">
      Keyboard
      <SimpleKeyboard
        disableButtonHold='true'
        layout={{ default: layout }}
        onKeyPress={onKeyPress}
        onKeyReleased={onKeyReleased}
        physicalKeyboardHighlight='true'
        physicalKeyboardHighlightPress='true'
        physicalKeyboardHighlightPressUsePointerEvents='true'
        useButtonTag='true'
      />
    </div>
  );
}

export default EnigmaMachine;
