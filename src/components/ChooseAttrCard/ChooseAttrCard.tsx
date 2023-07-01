import { useContext } from "react";
import myContext from "../../context/myContext";
import * as s from "../../global-styles/GlobalStyledComponents";

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
      <s.Title>{playerTopCard.title}</s.Title>
      <s.ImageSection>
        <s.Image src={`/images/${playerTopCard.id}.png`} alt={`${playerTopCard.id}`} />
      </s.ImageSection>
      <s.AttributesSection>
        <s.SelectableAttribute
          type="button"
          value="strength"
          disabled={attrButtonDisabled}
          onClick={(e) => selectAttribute(e)}
        >
          Força: {playerTopCard.strength}
        </s.SelectableAttribute>
        <s.SelectableAttribute
          type="button"
          value="skill"
          disabled={attrButtonDisabled}
          onClick={(e) => selectAttribute(e)}
        >
          Habilidade: {playerTopCard.skill}
        </s.SelectableAttribute>
        <s.SelectableAttribute
          type="button"
          value="magic"
          disabled={attrButtonDisabled}
          onClick={(e) => selectAttribute(e)}
        >
          Magia: {playerTopCard.magic}
        </s.SelectableAttribute>
        <s.SelectableAttribute
          type="button"
          value="fear"
          disabled={attrButtonDisabled}
          onClick={(e) => selectAttribute(e)}
        >
          Medo: {playerTopCard.fear}
        </s.SelectableAttribute>
        <s.SelectableAttribute
          type="button"
          value="charisma"
          disabled={attrButtonDisabled}
          onClick={(e) => selectAttribute(e)}
        >
          Carisma: {playerTopCard.charisma}
        </s.SelectableAttribute>
      </s.AttributesSection>
    </s.CardContainer>
  );
}

export default ChooseAttrCard;
