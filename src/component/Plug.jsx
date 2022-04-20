import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Plug({ letter, connectedTo, plugHandler }) {
  const connected = connectedTo !== null && letter !== connectedTo;
  const connecting = connectedTo === null;

  return (
    <button
      className={
        classNames(
          'Plug',
          {
            connected,
            connecting,
          },
        )
      }
      type="button"
      onClick={() => plugHandler(letter, connectedTo)}
    >
      {letter} (connects{letter} to {connectedTo === null ? '?' : connectedTo})
    </button>
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
