import React from 'react';

const Button = ({ title, onAction }) => (
  <button onClick={onAction}>
    {title}
  </button>
)

export default Button;
