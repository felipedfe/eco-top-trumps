import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";

function GameOver() {
  const navigate = useNavigate();

  const { setPlayersTurn, setCpusTurn, setGameOver } = useContext(myContext);

  const initialSettings = () => {
    setPlayersTurn(true);
    setCpusTurn(false);
    setGameOver(false);
  };

  const handleClick = () => {
    initialSettings();
    navigate('/');
  };

  return (
    <>
      <p>Game Over!</p>
      <button onClick={handleClick}>Play Again</button>
    </>
  )
}

export default GameOver;
