import styled from 'styled-components';

export const CardContainer = styled.section`
  width: 250px;
  padding: 10px;
  background-color: #c3c3c3;
  border-radius: 10px;
`
export const Title = styled.h2`
  font-size: 1.3rem;
  padding: 5px;
  background-color: #9fd7cc;
`

export const ImageSection = styled.section`
  height: 250px;
  width: 100%;
  background-color: pink;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

interface ISelectableAttrProps {
  selected: boolean;
}

export const SelectableAttribute = styled.button<ISelectableAttrProps>`
  background-color: ${(props) => props.selected ? "cyan" : "lightgray"}
`

export const AttributesSection = styled.section`
  display: flex;
  flex-direction: column;
`

interface IAttProps {
  selectedAttr: boolean,
}

export const Attribute = styled.span<IAttProps>`
  background-color: #9fd7cc;
  padding: 5px;
  border: solid gray 1px;

  border-color: ${(props) => props.selectedAttr && "red"};
  border-width: ${(props) => props.selectedAttr && "4px"};
`