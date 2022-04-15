import React from 'react';
import PropTypes from 'prop-types';
import SimpleKeyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './Keyboard.css';

function Keyboard({ onKeyUp, onKeyDown }) {
  const layout = [
    'q w e r t y u i o p',
    'a s d f g h j k l',
    'z x c v b n m',
  ];

  const onKeyReleased = (button) => {
    onKeyUp(button);
  };

  const onKeyPress = (keyPressed) => {
    onKeyDown(keyPressed);
  };

  return (
    <div className="Keyboard">
      Keyboard
      <SimpleKeyboard
        disableButtonHold="true"
        layout={{ default: layout }}
        onKeyPress={onKeyPress}
        onKeyReleased={onKeyReleased}
        useButtonTag="true"
      />
    </div>
  );
}

Keyboard.propTypes = {
  onKeyUp: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default Keyboard;
