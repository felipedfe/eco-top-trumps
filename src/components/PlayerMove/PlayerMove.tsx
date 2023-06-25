import { useState, useContext } from "react";
import ChooseAttrCard from "../ChooseAttrCard/ChooseAttrCard";
import CardComparison from "../CardComparison/CardComparison";
import styled from "styled-components";
import myContext from "../../context/myContext";

const ConfirmBtn = styled.button``;

function PlayerMove() {
  const [confirmAttr, setConfirmAttr] = useState(false);
  // const [confirmAttrBtnDisabled, setConfirmAttrBtnDisabled] = useState(true);

  const {
    setAttrButtonDisabled,
    confirmAttrBtnDisabled,
    setConfirmAttrBtnDisabled,
  } = useContext(myContext);

  const handleClick = () => {
    setConfirmAttr(true);
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
      {confirmAttr && <CardComparison setConfirmAttr={setConfirmAttr} />}
    </>
  );
}

export default PlayerMove;
