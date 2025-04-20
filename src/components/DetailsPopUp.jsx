import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NamesForm from "./NamesForm";
import GameTime from "./GameTime";

const DetailsPopUp = ({ clickedButton, setDetailsPopUp }) => {
  const navigate = useNavigate();
  const [customTime, setCustomTime] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const player1 = e.target.player1.value;
    const player2 = e.target.player2.value;
    const gameTime = customTime ? e.target["custom-game-time"].value : e.target["game-time"].value;
    const player1Color = e.target["player1-color"].value;
    navigate("Game", { state: { player1, player2, gameTime, clickedButton, player1Color } });
  };

  const setTypeOfTime = (e) => {
    if (e.target.value === "custom") {
      setCustomTime(true);
    } else {
      setCustomTime(false);
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
          <NamesForm />
          <GameTime setTypeOfTime={setTypeOfTime} customTime={customTime} />
          <button className="details-popup-submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsPopUp;