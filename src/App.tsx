import { useContext } from "react";
import PlayerMove from "./components/PlayerMove/PlayerMove";
import CpuMove from "./components/CpuMove/CpuMove";
import GameOver from "./components/GameOver/GameOver";
import myContext from "./context/myContext";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const { playerCards, playersTurn, cpusTurn, gameOver } = useContext(myContext);

  // console.log("GAME OVER: ", gameOver)
  // console.log("CPUS TURN: ", cpusTurn)
  // console.log("PLAYERS TURN: ", playersTurn)
  return (
    <>
      <GlobalStyles />
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
    </>
  );
}

export default App;
