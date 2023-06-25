import { useState, useContext } from "react";
import ChooseAttrCard from "../ChooseAttrCard/ChooseAttrCard";
import CardComparison from "../CardComparison/CardComparison";
import styled from "styled-components";
import myContext from "../../context/myContext";

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
    <>
      <p>Selecione atributo:</p>
      <ChooseAttrCard />
      <ConfirmBtn
        type="button"
        onClick={handleClick}
        disabled={confirmAttrBtnDisabled}
      >
        Confirma
      </ConfirmBtn>
      {confirmedAttr && <CardComparison setConfirmedAttr={setConfirmedAttr} />}
    </>
  );
}

export default PlayerMove;
