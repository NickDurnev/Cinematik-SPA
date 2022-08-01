import styled from '@emotion/styled';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const NavLink = styled(BaseNavLink)`
  display: block;
  padding: 40px 5px;
  position: relative;
  color: ${props => props.theme.textColor};

  & > svg {
    stroke: currentColor;
    width: 20px;
    height: 20px;
  }

  &.active {
    color: ${props => props.theme.bgElementColor};

    & > svg {
      stroke: currentColor;
    }

    &:before {
      content: '';
      background: ${props => props.theme.bgElementColor};
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 3px;
    }
  }

  & + & {
    margin-top: 30px;
  }
`;
