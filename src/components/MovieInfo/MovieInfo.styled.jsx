import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Wrap from 'components/Button/Button.styled';
import { device } from 'deviceSizes';

export const Container = styled.div`
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  & img {
    max-width: 365px;
    margin: 0 auto;
    max-height: auto;

    @media ${device.tablet} {
      width: 250px;
    }

    @media ${device.laptopL} {
      width: 400px;
    }
  }

  @media ${device.tablet} {
    width: 93vw;
    display: flex;
    margin-top: 0;
  }
`;

export const InfoWrap = styled.div`
  width: 100%;
  margin-top: 20px;
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

  @media ${device.tablet} {
    width: calc(100% -250px);
    padding: 0 5px;
  }
`;

export const MainInfo = styled.ul`
  display: flex;
  width: 60vw;
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

  @media ${device.tablet} {
    width: 30vw;
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
      margin: 0;
    }
  }
`;

export const AddInfo = styled.div`
  margin-top: 180px;

  @media ${device.mobileM} {
    margin-top: 100px;
  }

  @media ${device.tablet} {
    margin-top: 30px;
  }
`;

export const LinkWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  height: 40px;
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media ${device.tablet} {
    width: 150px;
    padding: 30px;
    font-size: 24px;
    font-weight: 600;
  }
`;

export const Button = styled(Wrap)`
  margin: 0 auto;
  margin-top: 30px;

  @media ${device.tablet} {
    margin-top: 35px;
  }
`;

export const IconButton = styled(Wrap)`
  margin: 0 auto;
  margin-top: 30px;
  font-size: 16px;
  & > svg {
    stroke: currentColor;
    width: 40px;
    height: 40px;
  }
`;
