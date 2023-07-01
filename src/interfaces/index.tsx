export interface ICard {
  id: string,
  title: string,
  strength: number,
  skill: number,
  magic: number,
  fear: number,
  charisma: number,
}

// export interface ICardComponent {
//   card: ICard,
//   selectiveAttr?: boolean,
// }

export interface IPlayerMove {
  playerCards: ICard[],
  cpuCards: ICard[],
}

export interface ICardComparison {
  setConfirmedAttr: React.Dispatch<React.SetStateAction<boolean>>;
}
