import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const NavLink = styled(BaseNavLink)`
  font-size: 24px;
  font-weight: 600;
  color: #eee3e3;
  text-decoration: none;
  &.active {
    color: #7d7df1;
  }

  & + & {
    margin-left: 10px;
  }
`;
