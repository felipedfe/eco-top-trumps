import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/myContext';
import { ICard } from '../../interfaces';
import Card from '../Card/Card';

// interface
interface ICardComparison {
  // playerTopCard: ICard,
  // cpuTopCard: ICard,
  setConfirmAttr: React.Dispatch<React.SetStateAction<boolean>>,
}

// função
function CardComparison(props: ICardComparison) {
  const [roundWinner, setRoundWinner] = useState("");
  const { setConfirmAttr } = props;
  const { setPlayersTurn, playerCards, cpuCards, selectedAttr } = useContext(myContext);

  const playerTopCard = playerCards[playerCards.length - 1];
  const cpuTopCard = cpuCards[cpuCards.length - 1];

  // quando o componente é renderizado é feita a verificação do ganhador da rodada
  useEffect(() => {
    const CompareCards = () => {
      if (playerTopCard[selectedAttr as keyof ICard] > cpuTopCard[selectedAttr as keyof ICard]) {
        console.log("ganhou!");
        setRoundWinner("player");

      } else {
        console.log("perdeu");
        setRoundWinner("cpu");
        // setPlayersTurn((prev: boolean) => !prev);
        // setPlayersTurn(false);
      }
    };

    CompareCards();
  }, [playerTopCard, cpuTopCard, selectedAttr]);

  const handleClick = () => {
    // CompareCards();
    setConfirmAttr((prev: boolean) => !prev);
    // setPlayersTurn((prev: boolean) => !prev);
    if (roundWinner === "cpu") setPlayersTurn(false);
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
