import { useState, useContext } from "react";
import ChooseAttrCard from "../ChooseAttrCard/ChooseAttrCard";
import CardComparison from "../CardComparison/CardComparison";
import styled from "styled-components";
import myContext from "../../context/myContext";

const ConfirmBtn = styled.button``;
function PlayerMove() {
  const [confirmAttr, setConfirmAttr] = useState(false);

  const { setAttrButtonDisabled } = useContext(myContext);

  const handleClick = () => {
    setConfirmAttr(true);
    setAttrButtonDisabled(true);
  };

  return (
    <section>
      <p>Selecione atributo:</p>
      <ChooseAttrCard />
      <ConfirmBtn type="button" onClick={handleClick}>
        Confirma
      </ConfirmBtn>
      {confirmAttr && <CardComparison setConfirmAttr={setConfirmAttr} />}
    </section>
  );
}

export default PlayerMove;
