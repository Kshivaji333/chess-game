import React from 'react';

function NamesForm() {
  return (
    <div className="names-form-container">
      <div className="mb-2">
        <label className="names-form-label" htmlFor="player1">
          Enter first player name:
        </label>
        <input className="names-form-input" type="text" id="player1" name="player1" required />
      </div>
      <div>
        <label className="names-form-label" htmlFor="player2">
          Enter second player name:
        </label>
        <input className="names-form-input" type="text" id="player2" name="player2" required />
      </div>
    </div>
  );
}

export default NamesForm;