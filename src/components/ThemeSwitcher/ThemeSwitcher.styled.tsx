import styled from '@emotion/styled';
import { ITheme } from 'services/interfaces';
import { motion } from 'framer-motion';


export const ThemeToggler = styled(motion.button) <{ theme?: ITheme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 10px;

  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.bgIconColor};
  color: ${({ theme }) => theme.textColor};
  transition: all ${({ theme }) => theme.hoverTransition} ${({ theme }) => theme.hoverTimeFunction};

  &:hover {
    color: ${({ theme }) => theme.linkColor};
  }
`;
