import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './LightPanel.css';

function LightPanel({ lights }) {
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
    // eslint-disable-next-line react/react-in-jsx-scope
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

export default LightPanel;
