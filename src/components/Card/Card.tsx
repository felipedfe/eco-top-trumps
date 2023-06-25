import { ICard } from "../../interfaces";
import * as s from '../../styles/GlobalComponents.styled';
import styled from "styled-components";

const Attribute = styled.p`

`

function Card({ title, strength, skill, magic }: ICard) {

  return (
    <s.CardContainer>
      <s.Title>{title}</s.Title>
      <Attribute>Força: {strength}</Attribute>
      <Attribute>Habilidade: {skill}</Attribute>
      <Attribute>Magia: {magic}</Attribute>
    </s.CardContainer>
  )
}

export default Card;
