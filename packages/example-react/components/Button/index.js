import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, alert, success, label, ...props }) => {
  const styles = {
    padding: '5px',
    fontSize: '15px',
    margin: '1px',
    border: '2px solid black',
    borderRadius: '3px',
    color: 'black',
    background: 'white',
  };

  if (alert || success) {
    styles.color = 'white';
  }

  if (alert) {
    styles.background = 'red';
  }

  if (success) {
    styles.background = 'green';
  }

  return (
    <button style={styles} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  alert: PropTypes.bool,
  success: PropTypes.bool,
};

export default Button;
