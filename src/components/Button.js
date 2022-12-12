import React from 'react';
import propTypes from 'prop-types'

const Button = ({text, color, onClick}) => {
  return (
    <div>
      <button onClick={onClick} style={{backgroundColor: color}} type="button" className="btn">{text}</button>
    </div>
  );
};

Button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  onClick: propTypes.func,
}

export default Button;