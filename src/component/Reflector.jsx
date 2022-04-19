import React from 'react';
import PropTypes from 'prop-types';

export default function Reflector({
  encoding,
  id,
  input,
  outputHandler,
}) {
  React.useEffect(() => {
    if (input !== null) {
      console.log(encoding);
      outputHandler('F');
    }
  }, [input]);

  return (
    <div className="Reflector">
      Reflector
      {id}
    </div>
  );
}

Reflector.propTypes = {
  encoding: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  input: PropTypes.string,
  outputHandler: PropTypes.func.isRequired,
};

Reflector.defaultProps = { input: null };
