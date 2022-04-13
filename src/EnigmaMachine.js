import React from 'react';
import {default as SimpleKeyboard} from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";
import './EnigmaMachine.css';

function LightBoard() {
  return (
    <div className="LightBoard">
      Light Board
    </div>
  );
}

function Plug(props) {
  const [letter, setLetter] = React.useState(props.letter);
  const [connectedTo, setconnectedTo] = React.useState(props.connectedTo || props.letter);
  const [connectedToSelf, setConnectedToSelf] = React.useState(props.letter === props.connectedTo);

  return (
    <div className="Plug" onClick={() => console.log(letter)}>
      Plug {letter} (connects {letter} to {connectedTo})
    </div>
  )
}

function PlugBoard(props) {
  const plugs = []

  for (const [k, v] of props.settings) {
    plugs.push(<Plug key={k} letter={k} connectedTo={v}/>)
  }

  return (
    <div className="PlugBoard">
      Plug Board
      {plugs}
    </div>
  );
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

function EnigmaMachine() {
  const alphaCodes = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = alphaCodes.map((e, i) => i + 97).map((x) => String.fromCharCode(x));

  const [plugBoardSettings, setPlugBoardSettings] = React.useState(new Map(
    alphabet.map((alpha) => [alpha, alpha]),
  ));

  return (
    <div className="EnigmaMachine">
      <LightBoard/>
      <Keyboard/>
      <PlugBoard
        settings={plugBoardSettings}
      />
    </div>
  );
}

export default EnigmaMachine;
