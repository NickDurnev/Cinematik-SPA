import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { device } from 'helpers/deviceSizes';

export const InfoContainer = styled.div`
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textColor};

  @media ${device.tablet} {
    width: 93vw;
    display: flex;
    margin-top: 0;
  }
`;

export const ImageWrap = styled.div`
  width: 310px;
  height: 465px;
  background-color: ${({ poster_path }) => !poster_path && '#666666'};
  color: ${({ theme }) => theme.linkColor};

  @media ${device.tablet} {
    width: 250px;
    height: 400px;
  }

  @media ${device.laptopM} {
    width: 400px;
    height: 600px;
  }

  & > img {
    width: 100%;
    height: 100%;
  }

  & svg {
    width: 150px;
    height: auto;
    stroke: currentColor;
  }
`;

export const StyledLink = styled(Link)`
  padding: 5px;
  font-family: 'Technovier';
  font-size: 15px;
  line-height: 17px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  background-color: inherit;
  transition: all ${props => props.theme.hoverTransition}
    ${props => props.theme.hoverTimeFunction};

  &:hover,
  &:focus {
    color: ${props => props.theme.textColor};
  }

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 21px;
  }
`;
