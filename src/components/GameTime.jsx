import React from 'react';

function GameTime({ setTypeOfTime, customTime }) {
  return (
    <div className="game-time-container">
      <label className="game-time-label" htmlFor="game-time">
        Select game time:
      </label>
      <select className="game-time-select" id="game-time" name="game-time" onChange={setTypeOfTime}>
        <option value="5m">5M</option>
        <option value="10m">10M</option>
        <option value="20m">20M</option>
        <option value="custom">custom</option>
      </select>
      {customTime && (
        <div className="mt-2">
          <label className="game-time-label" htmlFor="custom-game-time">
            Enter time:
          </label>
          <input className="game-time-input" type="number" id="custom-game-time" name="custom-game-time" required />
        </div>
      )}
    </div>
  );
}

export default GameTime;