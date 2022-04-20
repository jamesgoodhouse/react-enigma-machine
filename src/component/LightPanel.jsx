import React from 'react';
import PropTypes from 'prop-types';
import Light from './Light';
import { alphabet } from '../util/alphabet';
import './LightPanel.css';

export default function LightPanel({
  illuminatedLight,
}) {
  return (
    <div className="LightPanel">
      Light Panel
      {alphabet.map((letter) => (
        <Light
          key={letter}
          letter={letter}
          illuminated={illuminatedLight === letter}
        />
      ))}
    </div>
  );
}

LightPanel.propTypes = {
  illuminatedLight: PropTypes.string,
};

LightPanel.defaultProps = {
  illuminatedLight: null,
};
