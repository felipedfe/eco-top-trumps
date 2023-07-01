import { ICard } from "../../interfaces";
import * as s from '../../global-styles/GlobalStyledComponents';

function Card({ id, title, strength, skill, magic, fear, charisma }: ICard) {

  return (
    <s.CardContainer>
      <s.Title>{title}</s.Title>
      <s.ImageSection>
        <s.Image src={`/images/${id}.png`} alt={`${id}`} />
      </s.ImageSection>
      <s.AttributesSection>
        <s.Attribute>Força: {strength}</s.Attribute>
        <s.Attribute>Habilidade: {skill}</s.Attribute>
        <s.Attribute>Magia: {magic}</s.Attribute>
        <s.Attribute>Medo: {fear}</s.Attribute>
        <s.Attribute>Carisma: {charisma}</s.Attribute>
      </s.AttributesSection>
    </s.CardContainer >
  )
}

export default Card;
