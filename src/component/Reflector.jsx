import React from 'react';
import PropTypes from 'prop-types';

export default function Reflector({ id }) {
  return (
    <div className="Reflector">
      Reflector {id}
    </div>
  );
}

Reflector.propTypes = {
  id: PropTypes.string.isRequired,
};
