import React from 'react';
import Box from './Box';

function Bord() {
  let boxes = Array(8).fill(Array(8).fill(null));
  boxes = boxes.map((row, rowIndex) => {

    return row.map((_, columnIndex) => {
      const colorCondition = rowIndex % 2 === 0 ? columnIndex % 2 === 0 : columnIndex % 2 !== 0
      return (<Box color={colorCondition ? 'white' : 'black'} pice={[rowIndex, columnIndex]} key={`${rowIndex, columnIndex}`} />)
    }
    )
  })
  const rows = boxes.map((row) => <>{row.map((box) => box)}</>)
  // const boxes = Array(64).fill(null)

  return (
    <div className="w-full h-screen flex items-center justify-center" >
      <div className="grid grid-cols-8  h-[95vh] w-[95vh]">
        {rows}
      </div>
    </div>
  );
}

export default Bord;