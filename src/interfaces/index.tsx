export interface ICard {
  title: string,
  strength: number,
  skill: number,
  magic: number,
  fear: number,
}

export interface IPlayerMove {
  playerTopCard: ICard,
  cpuTopCard: ICard,
  // selectedAttr: string,
  // setSelectedAttr: React.Dispatch<React.SetStateAction<string>>,
}

export interface IPlayerTopCard  {
  cardInfo: ICard,
  setSelectedAttr: React.Dispatch<React.SetStateAction<string>>,
}