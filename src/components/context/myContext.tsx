import { createContext } from "react";
import { ICard } from "../../interfaces";

type ContextType = {
  playerCards: ICard[],
  setPlayerCards: React.Dispatch<React.SetStateAction<ICard[]>>
}

// aqui o context pode iniciar sem um valor definido
const myContext = createContext<ContextType | null>(null);

export default myContext;
