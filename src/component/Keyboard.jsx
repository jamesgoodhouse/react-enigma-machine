import React from 'react';
import PropTypes from 'prop-types';
import SimpleKeyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './Keyboard.css';

export default function Keyboard({ keyPressedHandler, keyReleasedHandler }) {
  const layout = [
    'q w e r t y u i o p',
    'a s d f g h j k l',
    'z x c v b n m',
  ];

  const handleKeyPressed = (key) => { keyPressedHandler(key); };

  const handleKeyReleased = (key) => { keyReleasedHandler(key); };

  return (
    <div className="Keyboard">
      Keyboard
      <SimpleKeyboard
        disableButtonHold="true"
        layout={{ default: layout }}
        onKeyPress={handleKeyPressed}
        onKeyReleased={handleKeyReleased}
        useButtonTag="true"
      />
    </div>
  );
}

Keyboard.propTypes = {
  keyPressedHandler: PropTypes.func.isRequired,
  keyReleasedHandler: PropTypes.func.isRequired,
};
