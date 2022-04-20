import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Light({ letter, illuminated }) {
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
  illuminated: PropTypes.bool.isRequired,
};
