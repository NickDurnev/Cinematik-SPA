import styled from '@emotion/styled';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { device } from 'helpers/deviceSizes';

export const Container = styled.nav`
  margin-top: 40px;

  @media ${device.tablet} {
    margin-top: 125px;
  }
`;

export const NavLink = styled(motion(BaseNavLink))`
  display: block;
  padding: 30px 5px;
  position: relative;
  color: ${props => props.theme.textColor};
  cursor: pointer;

  &:visited {
    color: ${props => props.theme.textColor};
  }

  & > svg {
    stroke: currentColor;
    width: 30px;
    height: auto;
  }

  &.active {
    color: ${props => props.theme.bgElementColor};

    & > svg {
      stroke: currentColor;
    }
  }

  & + & {
    margin-top: 30px;
  }
`;
