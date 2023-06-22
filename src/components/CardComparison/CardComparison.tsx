import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import { ICard, ICardComparison } from "../../interfaces";
import Card from "../Card/Card";

function CardComparison(props: ICardComparison) {
  const [roundWinner, setRoundWinner] = useState("");
  const { setConfirmAttr } = props;
  const { setPlayersTurn, playerCards, cpuCards, selectedAttr } =
    useContext(myContext);

  const playerTopCard = playerCards[playerCards.length - 1];
  const cpuTopCard = cpuCards[cpuCards.length - 1];

  // quando o componente é renderizado é feita a verificação do ganhador da rodada
  useEffect(() => {
    const CompareCards = () => {
      if (
        playerTopCard[selectedAttr as keyof ICard] >
        cpuTopCard[selectedAttr as keyof ICard]
      ) {
        console.log("ganhou!");
        setRoundWinner("player");
      } else {
        console.log("perdeu");
        setRoundWinner("cpu");
      }
    };

    CompareCards();
  }, [playerTopCard, cpuTopCard, selectedAttr]);

  const putCardsInPlayersDeck = () => {
    const cpuCard = cpuCards.pop() as ICard;
    const playerCard = playerCards.pop() as ICard;

    playerCards.unshift(cpuCard, playerCard);
  };

  const putCardsInCpusDeck = () => {
    const cpuCard = cpuCards.pop() as ICard;
    const playerCard = playerCards.pop() as ICard;

    cpuCards.unshift(cpuCard, playerCard);
  };

  const checkForCardsInDecks = () => {
    return playerCards.length && cpuCards.length;
  };

  const checkRoundWinner = (winner: string) => {
    const enoughCardsInDecks = checkForCardsInDecks();

    if (winner === "player" && enoughCardsInDecks) {
      putCardsInPlayersDeck();
    } else {
      putCardsInCpusDeck();
      setPlayersTurn(false);
    }

    if (!cpuCards.length || !playerCards.length) {
      setPlayersTurn(false);
      console.log("FIM DE JOGO");
    }
  };

  const handleClick = () => {
    setConfirmAttr((prev: boolean) => !prev);
    checkRoundWinner(roundWinner);
  };

  // os atributos são spread em <Card> para que props possa ser desestruturado
  // no componente
  return (
    <>
      <p>Card Comparison</p>
      <Card {...playerTopCard} />
      <Card {...cpuTopCard} />
      <button onClick={handleClick}>Back</button>
    </>
  );
}

export default CardComparison;
