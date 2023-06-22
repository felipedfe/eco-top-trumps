import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/myContext';
import { ICard, ICardArray } from '../../interfaces';
import Card from '../Card/Card';

// interface
interface ICardComparison {
  setConfirmAttr: React.Dispatch<React.SetStateAction<boolean>>,
}

// função
function CardComparison(props: ICardComparison) {
  const [roundWinner, setRoundWinner] = useState("");
  const { setConfirmAttr } = props;
  const {
    setPlayersTurn,
    playerCards,
    cpuCards,
    selectedAttr } = useContext(myContext);



  const playerTopCard = playerCards[playerCards.length - 1];
  const cpuTopCard = cpuCards[cpuCards.length - 1];


  // quando o componente é renderizado é feita a verificação do ganhador da rodada
  useEffect(() => {
    console.log("---> ", cpuCards.length)
    const CompareCards = () => {
      // if (selectedAttr) {


      if (playerTopCard[selectedAttr as keyof ICard] > cpuTopCard[selectedAttr as keyof ICard]) {
        console.log("ganhou!");
        setRoundWinner("player");

      } else {
        console.log("perdeu");
        setRoundWinner("cpu");
        // setPlayersTurn((prev: boolean) => !prev);
        // setPlayersTurn(false);
      }
      // }
      // console.log("selectedAttr--> ", selectedAttr)
    };

    CompareCards();
  }, [playerTopCard, cpuTopCard, selectedAttr]);

  const checkForCardsInDecks = () => {
    // console.log("enough: ", playerCards.length > 0 && cpuCards.length > 0);
    console.log("lenghts: ", playerCards.length, cpuCards.length)
    return [playerCards.length > 0, cpuCards.length > 0];
  };

  const handleClick = () => {
    // CompareCards();
    setConfirmAttr((prev: boolean) => !prev);
    // setPlayersTurn((prev: boolean) => !prev);
    // if (roundWinner === "cpu") setPlayersTurn(false);
    // const [enoughCardsInCpusDeck, enoughCardsInPlayersDeck] = checkForCardsInDeck();
    console.log("enough 1: ", playerCards.length > 0 && cpuCards.length > 0);
    const [enoughCardsInDecks, enoughCpu] = checkForCardsInDecks();
    console.log("enough 2: ", enoughCpu);
    console.log("primeiro---> ", cpuCards.length)
    if (roundWinner === "player" && enoughCpu) {

      const cpuCard = cpuCards.pop() as ICard;
      const playerCard = playerCards.pop() as ICard;

      playerCards.unshift(cpuCard, playerCard);
      
      if(!playerCards.length) setPlayersTurn(false);
    } else {
      // console.log("---> ", cpuCards.length)
      setPlayersTurn(false);
    }
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
