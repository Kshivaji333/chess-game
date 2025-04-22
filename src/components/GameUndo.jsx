import React from 'react'

const GameUndo = ({ setTypeOfUndo, customUndo }) => {
  return (
    <div className="game-undo-container">
      <label className="game-undo-label" htmlFor="game-undo">
        Undo Moves:
      </label>
      <select
        className="game-undo-select"
        id="game-undo"
        name="game-undo"
        onChange={setTypeOfUndo}
      >
        <option value="5">5 moves</option>
        <option value="noUndo">No Undo</option>
        <option value="custom">Custom</option>
      </select>
      {customUndo && (
        <div className="mt-2">
          <label className="game-undo-label" htmlFor="custom-game-undo">
            Enter number of moves to undo:
          </label>
          <input
            className="game-undo-custom-input"
            type="number"
            id="custom-game-undo"
            name="custom-game-undo"
            required
            min="1"
          />
        </div>
      )}
    </div>
  )
}

export default GameUndo
