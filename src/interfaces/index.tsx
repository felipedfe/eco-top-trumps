export interface ICard {
  title: string,
  strength: number,
  skill: number,
  magic: number,
  fear: number,
}

export interface ICardArray<T> {
  pop(this: { length: 0 }): undefined;
  pop(this: { 0: T }): T;
}

export interface IPlayerMove {
  playerCards: ICard[],
  cpuCards: ICard[],
  // selectedAttr: string,
  // setSelectedAttr: React.Dispatch<React.SetStateAction<string>>,
}

// export interface IChooseAttrCard  {
//   cardInfo: ICard,
//   setSelectedAttr: React.Dispatch<React.SetStateAction<string>>,
// }