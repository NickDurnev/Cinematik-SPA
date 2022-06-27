import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const NavLink = styled(BaseNavLink)`
  position: relative;
  font-size: 26px;
  font-weight: 600;
  color: #eee3e3;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    color: ${props => props.theme.bgElementColor};

    &:before {
      content: '';
      background: ${props => props.theme.bgElementColor};
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 3px;
      transition: all 0.3s ease-in-out;
    }
  }

  & + & {
    margin-left: 30px;
  }
`;
