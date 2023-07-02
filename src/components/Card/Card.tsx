import { useContext } from 'react';
import { ICard } from "../../interfaces";
import * as s from '../../global-styles/GlobalStyledComponents';
import myContext from "../../context/myContext";

function Card({ id, title, strength, skill, magic, fear, charisma }: ICard) {

  // esse valor é passado como um booleano para o componente s.Attribute
  // quando true, o atributo é destacado na carta
  const { selectedAttr } = useContext(myContext);

  return (
    <s.CardContainer>
      <s.Title>{title}</s.Title>
      <s.ImageSection>
        <s.Image src={`/images/${id}.png`} alt={`${id}`} />
      </s.ImageSection>
      <s.AttributesSection>
        <s.Attribute selectedAttr={selectedAttr === "strength"}>Força: {strength}</s.Attribute>
        <s.Attribute selectedAttr={selectedAttr === "skill"}>Habilidade: {skill}</s.Attribute>
        <s.Attribute selectedAttr={selectedAttr === "magic"}>Magia: {magic}</s.Attribute>
        <s.Attribute selectedAttr={selectedAttr === "fear"}>Medo: {fear}</s.Attribute>
        <s.Attribute selectedAttr={selectedAttr === "charisma"}>Carisma: {charisma}</s.Attribute>
      </s.AttributesSection>
    </s.CardContainer >
  )
}

export default Card;
