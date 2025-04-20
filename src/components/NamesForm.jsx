import React from 'react';
import { useState } from 'react';
function NamesForm() {
  const [player1Color, setPlayer1Color] = useState("white");

  return (
    <div className="names-form-container">
      <div className="mb-2">
        <label className="names-form-label" htmlFor="player1">
          player1 name:
        </label>
        <input className="names-form-input" type="text" id="player1" name="player1" required />
        <label className="names-form-label" htmlFor="player1-color">Player 1 color :</label>
        <select 
        className="names-form-select border-2 border-black" 
        id="player1-color" 
        name="player1-color"
        onChange={(e) => setPlayer1Color(e.target.value)}
        >
          <option value="black" className="bg-black text-white border-2 border-black" >black</option>
          <option value="white" className="bg-white text-black border-2 border-black" selected="selected">white</option>
        </select>
      </div>
      
      <div>
        <label className="names-form-label" htmlFor="player2">
          player2 name:
        </label>
        <input className="names-form-input" type="text" id="player2" name="player2" required />
        <p>Player 2 color :<span className='border-2 border-black rounded-md p-3.5'> {player1Color === "black" ? "white" : "black"}</span></p>
      </div>
    </div>
  );
}

export default NamesForm;