import styled from '@emotion/styled';
import { ITheme } from 'services/interfaces';
import { Link } from 'react-router-dom';
import { device } from 'helpers/deviceSizes';

export const LinkWrap = styled.div`
  width: 90%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    width: 90%;
    margin: 100px auto;
  }

  @media ${device.laptopM} {
    width: 950px;
  }
`;

export const StyledLink = styled(Link) <{ theme?: ITheme }>`
  padding: 5px;
  font-family: 'Technovier';
  font-size: 15px;
  line-height: 17px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.addBgElementColor};
  border-radius: 5px;
  background-color: inherit;
  transition: all ${({ theme }) => theme.hoverTransition} ${({ theme }) => theme.hoverTimeFunction};

  &:hover,
  &:focus,
  &:visited {
    color: ${({ theme }) => theme.textColor};
  }

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 21px;
  }
`;
