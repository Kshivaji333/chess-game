import '../styles/home.css';
import { useState } from 'react';
import DetailsPopUp from '../components/DetailsPopUp';
const HomePage = () => {
  const [showDetailsPopUp, setDetailsPopUp] = useState(false);
  const [clickedButton,setClickedButton] = useState(null);

  const showPopUP = (e) => {
    setDetailsPopUp(true)
    if(e.target.className === "btn-play-computer relative"){
      setClickedButton("computer");
    }
    else{
      setClickedButton("friend")
    }
  }


  return (
    <div className="home-page-container">
      <div className="button-container">
        <button
          className="btn-play-computer"
          onClick={showPopUP}
        >
          Play with computer
        </button>
        <button
          className="btn-play-friend"
          onClick={showPopUP}
        >
          Play with friend
        </button>
      </div>
      {showDetailsPopUp && <DetailsPopUp clickedButton={clickedButton} setDetailsPopUp = {setDetailsPopUp}></DetailsPopUp>}
    </div>
  );
}

export default HomePage;
