import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ThemeToggler = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 10px;

  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.bgIconColor};
  color: ${props => props.theme.textColor};
  transition: all ${({ theme }) => theme.hoverTransition}
    ${({ theme }) => theme.hoverTimeFunction};

  &:hover {
    color: ${props => props.theme.linkColor};
  }
`;
