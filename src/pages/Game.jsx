import { useLocation } from "react-router-dom";
import Bord from "../components/Bord";
import '../styles/game.css'
const Game = () => {
  const type = useLocation();
  return(
    <div>
      <Bord></Bord>
    </div>
  )
}

export default Game
