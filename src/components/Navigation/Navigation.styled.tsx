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
  padding: 30px 5px;
  position: relative;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  &:visited {
    color: ${({ theme }) => theme.textColor};
  }

  & > svg {
    stroke: currentColor;
    width: 30px;
    height: auto;
  }

  &.active {
    color: ${({ theme }) => theme.bgElementColor};

    & > svg {
      stroke: currentColor;
    }
  }

  & + & {
    margin-top: 30px;
  }
`;
