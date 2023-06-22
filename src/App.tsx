import { useContext } from "react";
import PlayerMove from "./components/PlayerMove/PlayerMove";
import myContext from "./context/myContext";

function App() {
  const { playerCards, playersTurn } = useContext(myContext);

  return (
    <main>
      {playerCards.length !== 0 && (
        <section>{playersTurn ? <PlayerMove /> : <p>Vez do CPU</p>}</section>
      )}
    </main>
  );
}

export default App;
