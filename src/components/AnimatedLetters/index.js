import React from 'react';
import './index.scss'
import PropTypes from 'prop-types';

const AnimatedLetters = (props) => {
  const { letterClass, strArray, idx }=props;
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
};
AnimatedLetters.propTypes = {
   letterClass: PropTypes.string.isRequired,
    strArray:PropTypes.string.isRequired, 
    idx :PropTypes.string.isRequired
};

export default AnimatedLetters;
