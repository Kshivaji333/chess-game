import React from 'react'

const GameUndo = ({setTypeOfUndo, customUndo }) => {
  return (
    <div>
      <label htmlFor="game-time">
        Select game time:
      </label>
      <select id="game-time" name="game-time" onChange={setTypeOfUndo}>
        <option value="5">5</option>
        <option value="noUndo">noUndo</option>
        <option value="custom">custom</option>
      </select>
      {customUndo && (
        <div className="mt-2">
          <label htmlFor="custom-game-undo">
            Enter how many moves you want to undo:
          </label>
          <input type="number" id="custom-game-undo" name="custom-game-undo" required />
        </div>
      )}
    </div>
  )
}

export default GameUndo
