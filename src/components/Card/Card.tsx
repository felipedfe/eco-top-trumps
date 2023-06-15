import { ICard } from "../../interfaces";
import * as s from '../../styles/Global.styled';
import styled from "styled-components";

const Attribute = styled.p`

`

function Card({ title, strength, skill }: ICard) {

  return (
    <s.CardContainer>
      <s.Title>{title}</s.Title>
      <Attribute>Força: {strength}</Attribute>
      <Attribute>Habilidade: {skill}</Attribute>
    </s.CardContainer>
  )
}

export default Card;
