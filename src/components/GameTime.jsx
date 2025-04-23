import React from 'react';

function GameTime({ setTypeOfTime, customTime }) {
  return (
    <div className="game-time-container">
      <label className="game-time-label" htmlFor="game-time">
        Game Time:
      </label>
      <select
        className="game-time-select"
        id="game-time"
        name="game-time"
        onChange={setTypeOfTime}
      >
        <option value="5m">5 Minutes</option>
        <option value="10m">10 Minutes</option>
        <option value="20m">20 Minutes</option>
        <option value="noTime">No Time Limit</option>
        <option value="custom">Custom Time</option>
      </select>
      {customTime && (
        <div>
          <label className="game-time-label" htmlFor="custom-game-time">
            Enter time in minutes:
          </label>
          <input
            className="game-time-custom-input"
            type="number"
            id="custom-game-time"
            name="custom-game-time"
            required
            min="1"
          />
        </div>
      )}
    </div>
  );
}

export default GameTime;