import React from 'react';

const Input = ({ value, handleChange }) => (
  <input type="text" value={value} onChange={handleChange} />
);

export default Input;
