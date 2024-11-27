import React from 'react';
import '../scss/components/_button.scss';

function Button({ text, onClick }) {
  return <button className="button" onClick={onClick}>{text}</button>;
}

export default Button;
