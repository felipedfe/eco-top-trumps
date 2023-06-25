import { useContext } from "react";
import PlayerMove from "../../components/PlayerMove/PlayerMove";
import CpuMove from "../../components/CpuMove/CpuMove";
import GameOver from "../../components/GameOver/GameOver";
import myContext from "../../context/myContext";

function GameBoard() {
  const { playerCards, playersTurn, cpusTurn, gameOver, } = useContext(myContext);

  console.log("players turn: ", playersTurn);
  console.log("cpus turn: ", cpusTurn);
  console.log(playerCards)

  return (
    <main>
      <section>
        {playerCards.length !== 0 && (
          <>
            {playersTurn && <PlayerMove />}
            {cpusTurn && <CpuMove />}
          </>
        )}
      </section>

      <section>
        {gameOver && <GameOver />}
      </section>
    </main>
  );
}

export default GameBoard;
