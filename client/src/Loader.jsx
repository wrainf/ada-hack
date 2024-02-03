// Loader.js

import React from 'react';
import './Loader.css';

import ball from './images/ball.png'

const Loader = () => {
  return (
    <div className="loader-container">
      <img className='pokeball' src={ball} alt="" />
    </div>
  );
};

export default Loader;
