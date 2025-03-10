import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NamesForm from "./NamesForm";
import GameTime from "./GameTIme";

const DetailsPopUp = ({ clickedButton, setDetailsPopUp }) => {
  const navigate = useNavigate();
  const [custumTime, setCustumTime] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const player1 = e.target.player1.value;
    const player2 = e.target.player2.value;
    const gameTime = custumTime ? e.target["custom-game-time"].value : e.target["game-time"].value;
    navigate("Game", { state: { player1, player2, gameTime, clickedButton } });
  };

  const setTypeOfTime = (e) => {
    if (e.target.value === "custom") {
      setCustumTime(true);
    } else {
      setCustumTime(false);
    }
  };

  return (
    <div className="details-popup-container">
      <button className="details-popup-close-button" onClick={() => setDetailsPopUp(false)}>
        x
      </button>
      <form className="details-popup-form" onSubmit={handleSubmit}>
        <NamesForm />
        <GameTime setTypeOfTime={setTypeOfTime} custumTime={custumTime} />
        <button className="details-popup-submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DetailsPopUp;