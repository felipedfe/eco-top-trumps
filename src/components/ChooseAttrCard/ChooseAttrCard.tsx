import { useContext } from "react";
import myContext from "../../context/myContext";
import * as s from "../../styles/GlobalComponents.styled";

function ChooseAttrCard() {
  const {
    setSelectedAttr,
    playerCards,
    attrButtonDisabled,
    setConfirmAttrBtnDisabled,
  } = useContext(myContext);

  const selectAttribute = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;

    setSelectedAttr(target.value);
    setConfirmAttrBtnDisabled(false);
  };

  const playerTopCard = playerCards[playerCards.length - 1];

  return (
    <s.CardContainer>
      <s.Title>Título: {playerTopCard.title}</s.Title>
      <s.Attribute
        type="button"
        value="strength"
        disabled={attrButtonDisabled}
        onClick={(e) => selectAttribute(e)}
      >
        Força: {playerTopCard.strength}
      </s.Attribute>
      <s.Attribute
        type="button"
        value="skill"
        disabled={attrButtonDisabled}
        onClick={(e) => selectAttribute(e)}
      >
        Habilidade: {playerTopCard.skill}
      </s.Attribute>
      <s.Attribute
        type="button"
        value="magic"
        disabled={attrButtonDisabled}
        onClick={(e) => selectAttribute(e)}
      >
        Magia: {playerTopCard.magic}
      </s.Attribute>
    </s.CardContainer>
  );
}

export default ChooseAttrCard;
