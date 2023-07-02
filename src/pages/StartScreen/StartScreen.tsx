import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { shuffle, splitCards } from "../../utils";
import { cards } from "../../data/cards";
import myContext from "../../context/myContext";
// Teste
import Card from "../../components/Card/Card";

function StartScreen() {
  const navigate = useNavigate();
  const { setPlayerCards, setCpuCards } = useContext(myContext);

  // no clique do botão as cartas são embaralhadas e distribuidas
  const gameStart = () => {
    shuffle(cards);
    const [playerHalf, cpuHalf] = splitCards(cards);

    setPlayerCards(playerHalf);
    setCpuCards(cpuHalf);

    navigate('/gameboard');
  };

  return (
    <main>
      <h1>Super Trunfo</h1>
      <button
        onClick={gameStart}
      >
        Play!
      </button>

      {/* <h2>Teste</h2>
      <Card {...cards[0]}/> */}
    </main>
  );
}

export default StartScreen;
