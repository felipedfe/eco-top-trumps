import { useState, useEffect, useContext } from 'react'
import { cards } from './data/cards';
import { shuffle, splitCards } from './utils';
import { ICard } from './interfaces/index';
import PlayerMove from './components/PlayerMove/PlayerMove';
import myContext from './context/myContext';

function App() {
  // const [playerCards, setPlayerCards] = useState<ICard[]>([]);
  // const [cpuCards, setCpuCards] = useState<ICard[]>([]);
  // const [playersTurn, setPlayersTurn] = useState(true);
  // const [selectedAttr, setSelectedAttr] = useState("");

  const { playerCards, playersTurn } = useContext(myContext);

  // useEffect(() => {
  //   shuffle(cards);
  //   const [playerHalf, cpuHalf] = splitCards(cards);

  //   setPlayerCards(playerHalf);
  //   setCpuCards(cpuHalf);
  // }, []);

  // console.log("playersTurn -> ", playersTurn);

  return (
    <main>
      {
        playerCards.length !== 0 &&
        <section>
          {playersTurn ?
            <PlayerMove
            // playerCards={playerCards}
            // cpuCards={cpuCards}
            // selectedAttr={selectedAttr}
            // setSelectedAttr={setSelectedAttr}
            />
            :
            <p>Vez do CPU</p>
          }
        </section>
      }
    </main>
  )
}

export default App
