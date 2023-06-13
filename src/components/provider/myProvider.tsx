import { useState } from 'react';
import myContext from '../context/myContext';
import { ICard } from '../../interfaces';
import { ContextType } from 'react';

function MyProvider({ children }: { children: React.ReactNode }) {
  const [playerCards, setPlayerCards] = useState<ICard[]>([]);

  const providerState = {
    playerCards,
    setPlayerCards
  }

  return (
    <myContext.Provider value={providerState}>
      {children}
    </myContext.Provider>
  )
}

export default MyProvider;
