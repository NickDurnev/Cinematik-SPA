import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

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
  width: 50px;
  height: 50px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 10px;

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
