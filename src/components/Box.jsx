import React from 'react';

function Box({ color, pice }) {
  return (
    <div className={`box-container ${color === 'white' ? 'bg-white' : 'bg-black'}`}>
      <span className="box-text">{pice}</span>
    </div>
  );
}

export default Box;