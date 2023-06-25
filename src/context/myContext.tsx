import React, { createContext } from "react";
import { ICard } from "../interfaces";

type ContextType = {
  playerCards: ICard[];
  cpuCards: ICard[];
  selectedAttr: string;
  setSelectedAttr: React.Dispatch<React.SetStateAction<string>>;
  playersTurn: boolean;
  setPlayersTurn: React.Dispatch<React.SetStateAction<boolean>>;
  cpusTurn: boolean;
  setCpusTurn: React.Dispatch<React.SetStateAction<boolean>>;
  confirmedAttr: boolean;
  setConfirmedAttr: React.Dispatch<React.SetStateAction<boolean>>;
  attrButtonDisabled: boolean;
  setAttrButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  confirmAttrBtnDisabled: boolean;
  setConfirmAttrBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

// aqui o context pode iniciar sem um valor definido
const myContext = createContext<ContextType>({} as ContextType);

export default myContext;
