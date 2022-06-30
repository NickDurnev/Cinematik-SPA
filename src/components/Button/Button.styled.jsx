import styled from 'styled-components';

const Wrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  width: 150px;
  height: 70px;
  padding: ${props => props.padding};
  color: ${props => props.theme.elementColor};
  background-color: ${props => props.theme.bgElementColor};
  transition: all ${props => props.theme.hoverTransition}
    ${props => props.theme.hoverTimeFunction};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.bgElementHoverColor};
  }
`;

export default Wrap;
