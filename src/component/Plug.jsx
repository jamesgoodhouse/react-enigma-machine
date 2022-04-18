import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Plug({ letter, connectedTo, plugHandler }) {
  const connected = connectedTo !== null && letter !== connectedTo;
  const connecting = connectedTo === null;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={
        classNames(
          'Plug',
          {
            connected,
            connecting,
          },
        )
      }
      onClick={() => plugHandler(letter, connectedTo)}
    >
      {letter} (connects {letter} to {connectedTo === null ? '?' : connectedTo})
    </div>
  );
}

Plug.propTypes = {
  letter: PropTypes.string.isRequired,
  connectedTo: PropTypes.string,
  plugHandler: PropTypes.func.isRequired,
};

Plug.defaultProps = {
  connectedTo: null,
};
