export interface ICard {
  title: string,
  strength: number,
  skill: number,
  magic: number,
  fear: number,
}

export interface IPlayerMove {
  playerCards: ICard[],
  cpuCards: ICard[],
}

export interface ICardComparison {
  setConfirmedAttr: React.Dispatch<React.SetStateAction<boolean>>;
}
