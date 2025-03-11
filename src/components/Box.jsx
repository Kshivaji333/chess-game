import React from 'react';

function Box({ color, pice }) {
  return (
    <div className={`box-container ${color === 'white' ? 'bg-white' : 'bg-black'}`}>
      {pice}
    </div>
  );
}

export default Box;