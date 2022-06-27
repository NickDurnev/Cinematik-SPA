import styled from 'styled-components';
import { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.2)
  }
  100% {
    transform: scale(1)
  }
`;

export const ThemeToggler = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.bgIconColor};
  color: ${props => props.theme.iconColor};
  &:focus {
    outline: none;
    animation: ${appear} ${props => props.theme.animationDuration}
      ${props => props.theme.animationTimeFunction};
  }
  transition: all ${props => props.theme.hoverTransition}
    ${props => props.theme.hoverTimeFunction};
`;
