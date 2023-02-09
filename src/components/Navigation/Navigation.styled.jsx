import styled from '@emotion/styled';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { device } from 'helpers/deviceSizes';

export const NavLink = styled(motion(BaseNavLink))`
  display: block;
  padding: 40px 5px;
  position: relative;
  color: ${props => props.theme.textColor};

  & > svg {
    stroke: currentColor;
    width: 100%;
    height: auto;

    @media ${device.desktopL} {
      width: 60%;
      height: auto;
    }
  }

  &.active {
    color: ${props => props.theme.bgElementColor};

    & > svg {
      stroke: currentColor;
    }

    /* &:before {
      content: '';
      background: ${props => props.theme.bgElementColor};
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 3px;
    } */
  }

  & + & {
    margin-top: 30px;
  }
`;
