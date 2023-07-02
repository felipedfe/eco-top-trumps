import { ICard } from '../interfaces/index';

export function shuffle(array: ICard[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function splitCards(array: ICard[]) {
  const middle = array.length / 2;
  const cpuHalf = array.slice(0, middle);
  const playerHalf = array.slice(middle, array.length);
  return [playerHalf, cpuHalf];
}

export function capitalize(word: string) {
  if (word) {
    const firstLetter = word[0].toUpperCase();
    const splited = word.split("")
    splited.splice(0, 1, firstLetter)
    return splited.join("");
  }
}
