import { useState } from 'react';
import { ICard } from '../../interfaces';
import styled from 'styled-components';
import { IPlayerTopCard } from '../../interfaces';
import * as s from '../../styles/Global.styled';

// const CardContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   padding: 1rem;
//   width: 150px;
//   gap: 3px;
// `

// const Title = styled.p`
// `

// const Attribute = styled.button`
//   text-align: left;
// `

function PlayerTopCard(props: IPlayerTopCard) {
  // const [selectedAttr, setSelectedAttr] = useState(0);

  const selectAttribute = (e: React.MouseEvent<HTMLButtonElement>) => {
    // const { target } = e;
    const target = e.target as HTMLButtonElement;
    setSelectedAttr(target.value)
    console.log(target.value)
  };

  const { cardInfo, setSelectedAttr } = props;
  // const { title } = cardInfo;
  // console.log(cardInfo)
  return (
    <s.CardContainer>
      <s.Title>Título: {cardInfo.title}</s.Title>
      <s.Attribute
        type="button"
        value="strength"
        onClick={(e) => selectAttribute(e)}
      >
        Força: {cardInfo.strength}
      </s.Attribute>
      <s.Attribute
        type="button"
        value="skill"
        onClick={(e) => selectAttribute(e)}
      >
        Habilidade: {cardInfo.skill}
      </s.Attribute>
      {/* <Attribute onClick={() => { }}>Habilidade: {cardInfo?.skill}</Attribute>
      <Attribute onClick={() => { }}>Magia: {cardInfo?.magic}</Attribute>
      <Attribute onClick={() => { }}>Medo: {cardInfo?.fear}</Attribute> */}
    </s.CardContainer>
  )
}

export default PlayerTopCard;
