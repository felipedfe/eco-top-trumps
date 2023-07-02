import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import { ICard, ICardComparison } from "../../interfaces";
import Card from "../Card/Card";
import styled from "styled-components";
import { capitalize } from "../../utils";

const ComparisonSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f5ff8a;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  padding: 1.5rem 0;
`

const ChosenAttribute = styled.h3`
  padding: 1rem 0;
`

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  /* background-color: pink; */
`

interface ICardWrapperProps {
  cardAnimation: boolean,
}

const CardWrapper = styled.div<ICardWrapperProps>`
  /* background-color: ${(props) => props.cardAnimation && "red"}; */
  transform: translateY(${(props) => props.cardAnimation ? "0px" : "30px"});
  /* transform: rotate(${(props) => props.cardAnimation ? "0deg" : "2deg"}); */

  
  transition: transform 0.7s;
`

const BackButton = styled.button`
  
`

function CardComparison(props: ICardComparison) {
  const [roundWinner, setRoundWinner] = useState("");
  const [cardAnimation, setCardAnimation] = useState(false);
  const { setConfirmedAttr } = props;
  const {
    setPlayersTurn,
    setCpusTurn,
    setGameOver,
    playerCards,
    cpuCards,
    selectedAttr,
    setSelectedAttr,
    setAttrButtonDisabled,
  } = useContext(myContext);

  const playerTopCard = playerCards[playerCards.length - 1];
  const cpuTopCard = cpuCards[cpuCards.length - 1];

  // quando componente é montado a animação das cartas começa
  useEffect(() => {
    setCardAnimation(true);
  }, [])

  // quando o componente é montado é feita a verificação do ganhador da rodada
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

  // const checkForCardsInDecks = () => {
  //   console.log("--> ", playerCards.length > 0 && cpuCards.length > 0)
  //   return playerCards.length && cpuCards.length;
  // };

  const checkRoundWinner = (winner: string) => {
    // const enoughCardsInDecks = checkForCardsInDecks();

    if (winner === "player") {
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
    }
  };

  const handleClick = () => {
    setConfirmedAttr((prev: boolean) => !prev);
    checkRoundWinner(roundWinner);
    setAttrButtonDisabled(false);
    setSelectedAttr("");
  };

  // os atributos são spread em <Card> para que props possa ser desestruturado no componente
  return (
    <ComparisonSection>
      <Title>{`${capitalize(roundWinner)} venceu!`}</Title>
      <ChosenAttribute>Atributo escolhido: {`${selectedAttr}`}</ChosenAttribute>
      <CardsContainer>
        <CardWrapper cardAnimation={cardAnimation}>
          <Card {...playerTopCard} />
        </CardWrapper>
        <CardWrapper cardAnimation={cardAnimation}>
          <Card {...cpuTopCard} />
        </CardWrapper>
      </CardsContainer>
      {/* <span>player - </span><Card card={playerTopCard} selectiveAttr />
      <span>cpu - </span><Card card={playerTopCard} /> */}
      <BackButton onClick={handleClick}>Back</BackButton>
    </ComparisonSection>
  );
}

export default CardComparison;
