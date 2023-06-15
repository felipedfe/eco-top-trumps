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

  const [confirmed, setConfirmed] = useState(false);

  const {
    selectedAttr,
    setSelectedAttr,
    // confirmedAttr,
    // setConfirmedAttr
  } = useContext(myContext);

  const CompareCards = () => {
    setConfirmed(true);

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
        confirmed && <CardComparison setConfirmed={setConfirmed} />
      }
    </section>
  )
}

export default PlayerMove;
