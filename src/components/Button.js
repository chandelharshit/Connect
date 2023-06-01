import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button({text}) {
  return (
    <Link to='about-project'>
      <button className='btn'>{text}</button>
    </Link>
  );
}
