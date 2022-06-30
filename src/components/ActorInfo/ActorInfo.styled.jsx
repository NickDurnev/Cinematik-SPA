import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-top: 20px;

  & img {
    width: 400px;
    height: auto;
  }
`;

export const Button = styled(Link)`
  display: block;
  width: 200px;
  padding: 15px;
  border-radius: 5px;
  font-family: sans-serif;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.elementColor};
  background-color: ${props => props.theme.bgElementColor};
  transition: background-color ${props => props.theme.hoverTransition}
    ${props => props.theme.hoverTimeFunction};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.bgElementHoverColor};
  }
`;
