import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const AddInfo = styled.div`
  max-width: 50vw -10px;
  padding: 20px 0;
`;

export const StyledLink = styled(Link)`
  padding: 15px 100px;
  margin: 10px 4px;
  font-family: sans-serif;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  text-decoration: none;
  display: inline-block;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.bgElementColor},
    ${props => props.theme.bgElementColor} 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all ${props => props.theme.hoverTransition}
    ${props => props.theme.hoverTimeFunction};

  &:before {
    content: '';
    background: ${props => props.theme.bgElementColor};
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;
  }

  &:hover::before {
    width: 100%;
  }
`;
