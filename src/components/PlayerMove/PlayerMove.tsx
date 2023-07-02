import { useState, useContext } from "react";
import ChooseAttrCard from "../ChooseAttrCard/ChooseAttrCard";
import CardComparison from "../CardComparison/CardComparison";
import styled from "styled-components";
import myContext from "../../context/myContext";

const PlayerMoveSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: lightgreen;
  padding-top: 5%;
`

const Title = styled.h1`
  padding: 2rem 0;
  font-size: 1.5rem;
`

const ConfirmBtn = styled.button``;

function PlayerMove() {
  const [confirmedAttr, setConfirmedAttr] = useState(false);

  const {
    setAttrButtonDisabled,
    confirmAttrBtnDisabled,
    setConfirmAttrBtnDisabled,
  } = useContext(myContext);

  const handleClick = () => {
    setConfirmedAttr(true);
    setAttrButtonDisabled(true);
    setConfirmAttrBtnDisabled(true);
  };

  return (
    <PlayerMoveSection>
      <Title>Selecione atributo:</Title>
      <ChooseAttrCard />
      <ConfirmBtn
        type="button"
        onClick={handleClick}
        disabled={confirmAttrBtnDisabled}
      >
        Confirma
      </ConfirmBtn>

      {/* A tela de comparação é aberta em cima da tela de seleção de atributo */}
      {confirmedAttr && <CardComparison setConfirmedAttr={setConfirmedAttr} />}
    </PlayerMoveSection>
  );
}

export default PlayerMove;
