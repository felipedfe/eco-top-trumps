import { useState, useEffect } from 'react'
import { cards } from './data/data';
import { shuffle, splitCards } from './utils';
import { ICard } from './interfaces/index';
import PlayerTopCard from './components/PlayerTopCard/PlayerTopCard';
import CpuTopCard from './components/CpuTopCard/CpuTopCard';
import PlayerMove from './components/PlayerMove/PlayerMove';

function App() {
  const [playerCards, setPlayerCards] = useState<ICard[]>([]);
  const [cpuCards, setCpuCards] = useState<ICard[]>([]);
  const [selectedAttr, setSelectedAttr] = useState("");
  const [playersTurn, setPlayersTurn] = useState(true);

  useEffect(() => {
    shuffle(cards);
    const [playerHalf, cpuHalf] = splitCards(cards);

    setPlayerCards(playerHalf);
    setCpuCards(cpuHalf);
  }, [])

  return (
    <main>
      {
        playerCards.length !== 0 &&
        <section>
        { playersTurn ?
          <PlayerMove
            playerTopCard={playerCards[playerCards.length - 1]}
            cpuTopCard={cpuCards[cpuCards.length - 1]}
            selectedAttr={selectedAttr}
            setSelectedAttr={setSelectedAttr}
          />
          :
          null
        }
        </section>
      }
    </main>
  )
}

export default App
