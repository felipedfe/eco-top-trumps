import React, { createContext } from "react";
import { ICard } from "../interfaces";

type ContextType = {
  playerCards: ICard[],
  cpuCards: ICard[],
  selectedAttr: string,
  setSelectedAttr: React.Dispatch<React.SetStateAction<string>>,
  playersTurn: boolean,
  setPlayersTurn: React.Dispatch<React.SetStateAction<boolean>>,
  confirmedAttr: boolean,
  setConfirmedAttr: React.Dispatch<React.SetStateAction<boolean>>,
  // roundWinner: string,
  // setRoundWinner: React.Dispatch<React.SetStateAction<string>>,
}

// aqui o context pode iniciar sem um valor definido
const myContext = createContext<ContextType>({} as ContextType);

export default myContext;
