import React from 'react';
import {default as SimpleKeyboard} from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";
import './Keyboard.css';

function Keyboard() {
  const [button, setButton] = React.useState("");

  const layout = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  const onKeyReleased = button => {
    setButton("")
  };

  const onKeyPress = keyPressed => {
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

export default Keyboard;
