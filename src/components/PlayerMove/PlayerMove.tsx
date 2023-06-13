import { useState } from 'react';
import { ICard, IPlayerMove } from "../../interfaces";
import PlayerTopCard from "../PlayerTopCard/PlayerTopCard";
import styled from 'styled-components';

const ConfirmBtn = styled.button`
  
`

function PlayerMove(props: IPlayerMove) {
  const { playerTopCard, cpuTopCard, selectedAttr, setSelectedAttr } = props;

  const [confirmed, setConfirmed] = useState(false);

  const checkRoundWin = () => {
    console.log("click");
    if (playerTopCard[selectedAttr as keyof ICard] > cpuTopCard[selectedAttr as keyof ICard]) {
      console.log("ganhou!")
    }
    setConfirmed(true);
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
        onClick={checkRoundWin}
      >
        Confirma
      </ConfirmBtn>
      {
        confirmed && <p>Confirmado!</p>
      }
    </section>
  )
}

export default PlayerMove;
