import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Wrap from 'components/Button/Button.styled';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  & img {
    width: 400px;
    max-height: auto;
  }
`;

export const InfoWrap = styled.div`
  width: calc(100% - 60px);
  padding: 0 40px;
  & > h1,
  h2 {
    margin-bottom: 20px;
  }

  & h2 {
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
    color: #817d7d;
  }

  & > p {
    line-height: 1.5;
    margin-bottom: 10px;
  }
`;

export const MainInfo = styled.ul`
  display: flex;
  max-width: 30vw;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  & > li:first-of-type {
    font-weight: 600;
    text-align: left;
    margin-right: 20px;
  }

  & > li:last-child {
    text-align: right;
  }

  & > li > p + p {
    margin-top: 10px;
  }
`;

export const MovieGenresList = styled.ul`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  & > li {
    padding: 15px 50px;
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
    -webkit-text-fill-color: ${props => props.theme.bgElementColor};
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
  }
`;

export const AddInfo = styled.div`
  margin-top: 140px;
`;

export const LinkWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  width: 150px;
  height: 40px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.theme.bgElementColor};
  border-radius: 5px;
  background-color: inherit;
  transition: all ${props => props.theme.hoverTransition}
    ${props => props.theme.hoverTimeFunction};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.bgElementHoverColor};
    color: ${props => props.theme.elementColor};
  }
`;

export const Button = styled(Wrap)`
  margin: 0 auto;
  margin-top: 30px;
`;
