import React, { useContext } from 'react';
import myContext from '../context/myContext';
import { ICard } from '../../interfaces';
import Card from '../Card/Card';

// interface
interface ICardComparison {
  playerTopCard: ICard,
  cpuTopCard: ICard,
  setCardComparison: React.Dispatch<React.SetStateAction<boolean>>,
}

// função
function CardComparison(props: ICardComparison) {
  const { setCardComparison, playerTopCard, cpuTopCard } = props;
  const { setPlayersTurn } = useContext(myContext);

  const handleClick = () => {
    setCardComparison((prev: boolean) => !prev)
    setPlayersTurn((prev: boolean) => !prev)
  };

  // os atributos são spread em <Card> para que props possa ser desestruturado
  // no componente
  return (
    <>
      <p>Card Comparison</p>
      <Card {...playerTopCard} />
      <Card {...cpuTopCard} />
      <button
        onClick={handleClick}
      >
        Back
      </button>
    </>
  )
}

export default CardComparison;
