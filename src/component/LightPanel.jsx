import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './LightPanel.css';

export default function LightPanel({ lights }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="LightPanel">
      Light Panel
      {[...lights.keys()].map((k) => (
        <Light
          key={k}
          letter={k}
          illuminated={lights.get(k)}
        />
      ))}
    </div>
  );
}

LightPanel.propTypes = {
  lights: PropTypes.instanceOf(Map).isRequired,
};

function Light({ letter, illuminated }) {
  return (
    <div
      className={
        classNames(
          'Light',
          {
            illuminated,
          },
        )
      }
    >
      {letter}
    </div>
  );
}

Light.propTypes = {
  letter: PropTypes.string.isRequired,
  illuminated: PropTypes.string.isRequired,
};
