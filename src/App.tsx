import { useState, useEffect, useContext } from 'react'
import { cards } from './data/cards';
import { shuffle, splitCards } from './utils';
import { ICard } from './interfaces/index';
import PlayerTopCard from './components/PlayerTopCard/PlayerTopCard';
import CpuTopCard from './components/CpuTopCard/CpuTopCard';
import PlayerMove from './components/PlayerMove/PlayerMove';
import myContext from './components/context/myContext';

function App() {
  const [playerCards, setPlayerCards] = useState<ICard[]>([]);
  const [cpuCards, setCpuCards] = useState<ICard[]>([]);
  // const [playersTurn, setPlayersTurn] = useState(true);
  // const [selectedAttr, setSelectedAttr] = useState("");

  const { playersTurn } = useContext(myContext);

  useEffect(() => {
    shuffle(cards);
    const [playerHalf, cpuHalf] = splitCards(cards);

    setPlayerCards(playerHalf);
    setCpuCards(cpuHalf);
  }, []);

  console.log(playersTurn);

  return (
    <main>
      {
        playerCards.length !== 0 &&
        <section>
          {playersTurn ?
            <PlayerMove
              playerTopCard={playerCards[playerCards.length - 1]}
              cpuTopCard={cpuCards[cpuCards.length - 1]}
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
