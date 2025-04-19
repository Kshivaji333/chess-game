import React from 'react';

function Box({ color, piece }) {
  return (
    <div className={`box-container ${color === 'white' ? 'bg-white' : 'bg-black'}`}>
      {piece}
    </div>
  );
}

export default Box;