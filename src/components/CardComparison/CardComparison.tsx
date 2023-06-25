import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import { ICard, ICardComparison } from "../../interfaces";
import Card from "../Card/Card";

function CardComparison(props: ICardComparison) {
  const [roundWinner, setRoundWinner] = useState("");
  const { setConfirmAttr } = props;
  const {
    setPlayersTurn,
    setCpusTurn,
    gameOver,
    setGameOver,
    playerCards,
    cpuCards,
    selectedAttr,
    setAttrButtonDisabled,
  } = useContext(myContext);

  const playerTopCard = playerCards[playerCards.length - 1];
  const cpuTopCard = cpuCards[cpuCards.length - 1];

  // quando o componente é renderizado é feita a verificação do ganhador da rodada
  useEffect(() => {
    const compareCards = () => {
      if (
        playerTopCard[selectedAttr as keyof ICard] >
        cpuTopCard[selectedAttr as keyof ICard]
      ) {
        setRoundWinner("player");
      } else {
        setRoundWinner("cpu");
      }
    };

    compareCards();
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
      setPlayersTurn(true);
      setCpusTurn(false);
    } else {
      putCardsInCpusDeck();
      setPlayersTurn(false);
      setCpusTurn(true);
    }

    if (!cpuCards.length || !playerCards.length) {
      setPlayersTurn(false);
      setCpusTurn(false);
      setGameOver((prev) => !prev);
      
      console.log("CPU CARDS length: ", cpuCards.length);
      console.log("PLAYER CARDS length: ", playerCards.length);
      console.log("FIM DE JOGO");
    }
  };

  const handleClick = () => {
    setConfirmAttr((prev: boolean) => !prev);
    checkRoundWinner(roundWinner);
    setAttrButtonDisabled(false);
  };

  // os atributos são spread em <Card> para que props possa ser desestruturado
  // no componente
  return (
    <>
      <p>Card Comparison</p>
      <p>{`${roundWinner} venceu!`}</p>
      <Card {...playerTopCard} />
      <Card {...cpuTopCard} />
      <button onClick={handleClick}>Back</button>
    </>
  );
}

export default CardComparison;
