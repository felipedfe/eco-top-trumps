import { useContext } from "react";
import PlayerMove from "./components/PlayerMove/PlayerMove";
import CpuMove from "./components/CpuMove/CpuMove";
import myContext from "./context/myContext";

function App() {
  const { playerCards, playersTurn, cpusTurn, gameOver } = useContext(myContext);
  // const [cpusTurn, setCpusTurn] = useState(false);

  console.log("GAME OVER: ", gameOver)
  console.log("CPUS TURN: ", cpusTurn)
  console.log("PLAYERS TURN: ", playersTurn)
  return (
    <main>
      {/* {playerCards.length !== 0 && (
        <section>{playersTurn ? <PlayerMove /> : <CpuMove />}</section>
      )} */}
      <section>
        {playerCards.length !== 0 && (
          <>
            {playersTurn && <PlayerMove />}
            {cpusTurn && <CpuMove />}
          </>
        )}
      </section>

      <section>
        {gameOver && <p>Game Over</p>}
      </section>
    </main>
  );
}

export default App;
