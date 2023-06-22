import { useState, useEffect } from 'react';
import myContext from '../context/myContext';
import { ICard, ICardArray } from '../interfaces';
import { shuffle, splitCards } from '../utils';
import { cards } from '../data/cards';

function MyProvider({ children }: { children: React.ReactNode }) {
  // const [playerCards, setPlayerCards] = useState<ICard[]>([]);
  // const [cpuCards, setCpuCards] = useState<ICard[]>([]);
  const [selectedAttr, setSelectedAttr] = useState("");
  const [playersTurn, setPlayersTurn] = useState(true);
  const [confirmedAttr, setConfirmedAttr] = useState(false);
  const [playerCards, setPlayerCards] = useState<ICard[]>([]);
  const [cpuCards, setCpuCards] = useState<ICard[]>([]);
  // const [playerCards, setPlayerCards] = useState<ICardArray<ICard>>([]);
  // const [cpuCards, setCpuCards] = useState<ICard[]>([]);
  // const [roundWinner, setRoundWinner] = useState("");

  // aqui as cartas são embaralhadas e distribuidas
  useEffect(() => {
    shuffle(cards);
    const [playerHalf, cpuHalf] = splitCards(cards);

    setPlayerCards(playerHalf);
    setCpuCards(cpuHalf);
  }, []);

  const providerState = {
    playerCards,
    cpuCards,
    setPlayerCards,
    selectedAttr,
    setSelectedAttr,
    playersTurn,
    setPlayersTurn,
    confirmedAttr,
    setConfirmedAttr,
  }

  return (
    <myContext.Provider value={providerState}>
      {children}
    </myContext.Provider>
  )
}

export default MyProvider;
