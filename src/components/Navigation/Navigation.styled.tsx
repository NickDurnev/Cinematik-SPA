import styled from '@emotion/styled';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ITheme } from 'services/interfaces';
import { device } from 'helpers/deviceSizes';

export const Container = styled.nav`
  margin-top: 40px;

  @media ${device.tablet} {
    margin-top: 125px;
  }
`;

export const NavLink = styled(motion(BaseNavLink)) <{ theme?: ITheme }>`
  display: block;
  width: 40px;
  margin: 0 auto;
  padding: 30px 0;
  position: relative;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  &:visited {
    color: ${({ theme }) => theme.textColor};
  }

  & > svg {
    stroke: currentColor;
    width: 70%;
    height: auto;
  }

  &.active {
    color: ${({ theme }) => theme.bgElementColor};
  }

  & + & {
    margin-top: 30px;
  }
`;
