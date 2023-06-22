import { useContext } from "react";
import myContext from "../../context/myContext";
import * as s from "../../styles/Global.styled";

function ChooseAttrCard() {
  const { setSelectedAttr, playerCards } = useContext(myContext);

  const selectAttribute = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setSelectedAttr(target.value);
  };

  const playerTopCard = playerCards[playerCards.length - 1];

  return (
    <s.CardContainer>
      <s.Title>Título: {playerTopCard.title}</s.Title>
      <s.Attribute
        type="button"
        value="strength"
        onClick={(e) => selectAttribute(e)}
      >
        Força: {playerTopCard.strength}
      </s.Attribute>
      <s.Attribute
        type="button"
        value="skill"
        onClick={(e) => selectAttribute(e)}
      >
        Habilidade: {playerTopCard.skill}
      </s.Attribute>
    </s.CardContainer>
  );
}

export default ChooseAttrCard;
