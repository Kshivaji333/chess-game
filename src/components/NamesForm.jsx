import React from 'react';
import { useState } from 'react';
function NamesForm() {


  return (
    <div className="names-form-container">
      <div>
        <label className="names-form-label" htmlFor="player1">
          player1 name:
        </label>
        <input className="names-form-input" type="text" id="player1" name="player1" required />
      </div>

      <div>
        <label className="names-form-label" htmlFor="player2">
          player2 name:
        </label>
        <input className="names-form-input" type="text" id="player2" name="player2" required />
      </div>
    </div>
  );
}

export default NamesForm;