import React from 'react';
import Box from './Box';

function Bord() {
  const boxes = Array(8).fill(Array(8).fill(null));
  const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h"]
  const alphabetsBoxes = alphabets.map((alphabet, index) => <div key={index} className='text-center'>{alphabet}</div>)
  const updatedBoxes = boxes.map((row, rowIndex) => {

    return row.map((_, columnIndex) => {
      const colorCondition = rowIndex % 2 === 0 ? columnIndex % 2 === 0 : columnIndex % 2 !== 0
      return (<Box color={colorCondition ? 'white' : 'black'} pice={[rowIndex, columnIndex]} key={`${rowIndex, columnIndex}`} />)
    }
    )
  })

  const rows = updatedBoxes.map((row, index) =>
    <>
      <div className=' flex items-center justify-end gap-2'>{index + 1}<div></div></div>
      {row.map((box) => box)}
      <div className='flex items-center gap-2'><div></div>{index + 1}</div>
    </>)


  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {/* Top Row Grid */}
      <div className="grid grid-cols-8 w-[95vh] ">
      {alphabetsBoxes}
      </div>

      <div className="grid grid-cols-10 grid-rows-8 h-[95vh] w-[118.75vh]">
        {rows}
      </div>

      {/* Bottom Row Grid */}
      <div className="grid grid-cols-8 w-[95vh] ">
      {alphabetsBoxes}
      </div>
    </div>
  );
}

export default Bord;