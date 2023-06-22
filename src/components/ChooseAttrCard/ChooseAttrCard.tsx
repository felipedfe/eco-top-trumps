import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import * as s from "../../styles/Global.styled";

function ChooseAttrCard() {
  // const [buttonDisabled, setButtonDisabled] = useState(false);
  const {
    setSelectedAttr,
    playerCards,
    setAttrButtonDisabled,
    attrButtonDisabled,
  } = useContext(myContext);

  const selectAttribute = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setSelectedAttr(target.value);
  };

  // useEffect(() => {
  //   setAttrButtonDisabled(false);
  // }, [setAttrButtonDisabled]);

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
    </s.CardContainer>
  );
}

export default ChooseAttrCard;
