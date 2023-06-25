import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { shuffle, splitCards } from "../../utils";
import { cards } from "../../data/cards";
import myContext from "../../context/myContext";

function StartScreen() {
  const navigate = useNavigate();
  const { setPlayerCards, setCpuCards } = useContext(myContext);

  // aqui as cartas são embaralhadas e distribuidas
  const gameStart = () => {
    shuffle(cards);
    const [playerHalf, cpuHalf] = splitCards(cards);

    setPlayerCards(playerHalf);
    setCpuCards(cpuHalf);

    navigate('/gameboard');
  };

  return (
    <>
      <h1>Super Trunfo</h1>
      <button
        onClick={gameStart}
      >
        Play!
      </button>
    </>
  );
}

export default StartScreen;
