import { useState, useContext } from 'react';
import { ICard, IPlayerMove } from "../../interfaces";
import ChooseAttrCard from "../ChooseAttrCard/ChooseAttrCard";
import CardComparison from '../CardComparison/CardComparison';
import styled from 'styled-components';
import myContext from '../../context/myContext';

const ConfirmBtn = styled.button`
  
`
function PlayerMove() {
  // props: IPlayerMove
  // const { playerCards, cpuCards } = props;

  const [confirmAttr, setConfirmAttr] = useState(false);

  const {
    selectedAttr,
    setSelectedAttr,
    playerCards,
    // cpuCards,
    // cardComparisonAttr,
    // setCardComparisonAttr
  } = useContext(myContext);

  // pegamos a carta do topo do baralho
  const playerTopCard = playerCards[playerCards.length - 1];
  // const cpuTopCard = cpuCards[cpuCards.length - 1];

  const CompareCards = () => {
    setConfirmAttr(true);

    //   if (playerTopCard[selectedAttr as keyof ICard] > cpuTopCard[selectedAttr as keyof ICard]) {
    //     console.log("ganhou!")
    //   } else {
    //     console.log("perdeu")
    //   }
    // };
  };

  return (
    <section>
      <p>Selecione atributo:</p>
      <ChooseAttrCard
        // cardInfo={playerTopCard}
        // setSelectedAttr={setSelectedAttr}
      />
      <ConfirmBtn
        type="button"
        onClick={() => setConfirmAttr(true)}
      >
        Confirma
      </ConfirmBtn>
      {
        confirmAttr &&
        <CardComparison
          // playerTopCard={playerTopCard}
          // cpuTopCard={cpuTopCard}
          setConfirmAttr={setConfirmAttr}
        />
      }
    </section>
  )
}


export default PlayerMove;
