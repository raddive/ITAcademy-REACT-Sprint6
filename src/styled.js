import styled from 'styled-components';

export const H3Border = styled.h3`
  font-size: 1.5em;
  text-align: center;
  border : 1pt solid black;
  border-radius : 20pt;
  padding :5pt;
  background-color: ${props => (props.activo===props.current ? 'pink' : 'white')};
`;