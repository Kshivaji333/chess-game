import { useLocation } from "react-router-dom";
import Board from "../components/Board";
import '../styles/game.css'

const Game = () => {
  const type = useLocation();
  console.log(type.state)
  return (
    <div>
      <Board></Board>
    </div>
  )
}

export default Game
