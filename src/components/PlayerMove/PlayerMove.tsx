import { useState, useContext } from 'react';
import { ICard, IPlayerMove } from "../../interfaces";
import PlayerTopCard from "../PlayerTopCard/PlayerTopCard";
import CardComparison from '../CardComparison/CardComparison';
import styled from 'styled-components';
import myContext from '../context/myContext';

const ConfirmBtn = styled.button`
  
`
function PlayerMove(props: IPlayerMove) {
  // props: IPlayerMove
  const { playerTopCard, cpuTopCard } = props;

  const [cardComparison, setCardComparison] = useState(false);

  const {
    selectedAttr,
    setSelectedAttr,
    // cardComparisonAttr,
    // setCardComparisonAttr
  } = useContext(myContext);

  const CompareCards = () => {
    setCardComparison(true);

    if (playerTopCard[selectedAttr as keyof ICard] > cpuTopCard[selectedAttr as keyof ICard]) {
      console.log("ganhou!")
    } else {
      console.log("perdeu")
    }
  };

  return (
    <section>
      <p>Selecione atributo:</p>
      <PlayerTopCard
        cardInfo={playerTopCard}
        setSelectedAttr={setSelectedAttr}
      />
      <ConfirmBtn
        type="button"
        onClick={CompareCards}
      >
        Confirma
      </ConfirmBtn>
      {
        cardComparison &&
        <CardComparison
          playerTopCard={playerTopCard}
          cpuTopCard={cpuTopCard}
          setCardComparison={setCardComparison}
        />
      }
    </section>
  )
}

export default PlayerMove;
