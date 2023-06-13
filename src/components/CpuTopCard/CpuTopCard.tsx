import { ICard } from '../../interfaces';
import * as s from '../../styles/Global.styled';

function CpuTopCard(props: { cardInfo: ICard }) {
  const { cardInfo } = props;

  return (
    <s.CardContainer>
      <s.Title>Título: {cardInfo.title}</s.Title>
      <s.Attribute
        type="button"
        value="strength"
      >
        Força: {cardInfo.strength}
      </s.Attribute>
      {/* <Attribute onClick={() => { }}>Habilidade: {cardInfo?.skill}</Attribute>
      <Attribute onClick={() => { }}>Magia: {cardInfo?.magic}</Attribute>
      <Attribute onClick={() => { }}>Medo: {cardInfo?.fear}</Attribute> */}
    </s.CardContainer>
  )
}

export default CpuTopCard;

