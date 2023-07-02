import { useContext } from "react";
import PlayerMove from "../../components/PlayerMove/PlayerMove";
import CpuMove from "../../components/CpuMove/CpuMove";
import GameOver from "../../components/GameOver/GameOver";
import myContext from "../../context/myContext";
import styled from "styled-components";

const Main = styled.main`
  height: 100vh;
`

const GameSection = styled.section`
  height: 100%;
`

function GameBoard() {
  const { playerCards, playersTurn, cpusTurn, gameOver, } = useContext(myContext);

  console.log("players turn: ", playersTurn);
  console.log("cpus turn: ", cpusTurn);
  console.log(playerCards)

  return (
    <Main>
      <GameSection>
        {playerCards.length !== 0 && (
          <>
            {playersTurn && <PlayerMove />}
            {cpusTurn && <CpuMove />}
          </>
        )}
      </GameSection>

      <section>
        {gameOver && <GameOver />}
      </section>
    </Main>
  );
}

export default GameBoard;
