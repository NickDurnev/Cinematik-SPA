import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ITheme } from 'services/interfaces';
import IconButton from '@mui/material/IconButton';

export const ListItem = styled(motion.li)`
  position: relative;
`;

export const Button = styled(IconButton)<{theme?:ITheme}>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  color: ${({ theme }) => theme.bgElementColor};
  width: 50px;
  height: 50px;

  & > svg {
    width: 30px;
    height: 30px;
  }
`;
