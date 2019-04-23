import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ rounded, bg, children, size }) => {
  const styles = {
    borderRadius: rounded ? "1.5rem" : "none", 
    background: bg,
    color: "white",
    padding: size === "sm" ? "0.2rem .75rem" : size === "lg" ? "0.75rem 1.75rem" : "0.5rem 1.5rem",
    border: "none",
    outline: "none",
    fontSize: size === "sm" ? "0.75rem" : size === "lg" ? "1.2rem" : "1rem", 
  }

	return <button style={styles}>{children}</button>;
};

Button.defaultProps = {
  bg: "#aaa",
  rounded: false
}

Button.propTypes = {
  rounded: PropTypes.bool, 
  bg: PropTypes.string, 
  size: PropTypes.string
};

export default Button;
