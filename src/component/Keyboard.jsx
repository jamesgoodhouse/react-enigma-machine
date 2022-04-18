import React from 'react';
import PropTypes from 'prop-types';
import SimpleKeyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './Keyboard.css';

export default function Keyboard({ currentKeyHandler }) {
  const layout = [
    'Q W E R T Y U I O P',
    'A S D F G H J K L',
    'Z X C V B N M',
  ];

  const handleKeyPressed = (key) => { currentKeyHandler(key); };

  const handleKeyReleased = () => { currentKeyHandler(null); };

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
  currentKeyHandler: PropTypes.func.isRequired,
};
