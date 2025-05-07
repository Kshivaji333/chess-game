import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NamesForm from "./NamesForm";
import GameTime from "./GameTime";
import GameUndo from "./GameUndo";

const DetailsPopUp = ({ clickedButton, setDetailsPopUp }) => {
  const navigate = useNavigate();
  const [customTime, setCustomTime] = useState(false);
  const [customUndo, setCustomUndo] = useState(false);
  const [player1Color, setPlayer1Color] = useState("white");

  const handleSubmit = (e) => {
    e.preventDefault();
    const player1 = e.target.player1.value;
    const player2 = e.target.player2.value;
    const gameTime = customTime ? e.target["custom-game-time"].value : e.target["game-time"].value;
    const GameUndo = customUndo ? e.target["game-undo-custom-input"].value : e.target["game-undo"].value;
    const player1Color = e.target["player1-color"].value;
    navigate("Game", { state: { player1, player2, gameTime, clickedButton, player1Color, GameUndo } });
  };

  const setTypeOfTime = (e) => {
    if (e.target.value === "custom") {
      setCustomTime(true);
    } else {
      setCustomTime(false);
    }
  };

  const setTypeOfUndo = (e) => {
    if (e.target.value === "custom") {
      setCustomUndo(true);
    } else {
      setCustomUndo(false);
    }
  };

  return (
    <div className="details-popup-container">
      <div className="details-popup-content">
        <div className="details-popup-header">
          <h2 className="details-popup-title">Game Details</h2>
          <button className="details-popup-close-button" onClick={() => setDetailsPopUp(false)}>
            ×
          </button>
        </div>
        <form className="details-popup-form" onSubmit={handleSubmit}>
          <div className="details-popup-left-section">
            <NamesForm />
            <div className="colors-form-container">
              <label className="player-color-label" htmlFor="player1-color">Player 1 Color:</label>
              <select
                className="player-color-select"
                id="player1-color"
                name="player1-color"
                onChange={(e) => setPlayer1Color(e.target.value)}
              >
                <option value="white">White</option>
                <option value="black">Black</option>
              </select>
              <div>
                <span className="player-color-label">Player 2 Color:</span>
                <span className="player-color-display">
                  {player1Color === "black" ? "White" : "Black"}
                </span>
              </div>
            </div>
          </div>

          <div className="details-popup-right-section">
            <GameTime setTypeOfTime={setTypeOfTime} customTime={customTime} />
            <GameUndo setTypeOfUndo={setTypeOfUndo} customUndo={customUndo} />
          </div>

          <div className="col-span-2">
            <button className="details-popup-submit-button" type="submit">
              Start Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsPopUp;