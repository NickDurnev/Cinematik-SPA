import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import IconButton from '@mui/material/IconButton';

export const ListItem = styled(motion.li)`
  position: relative;
`;

export const FetchMarker = styled.div`
  width: 5px;
  height: 5px;
`;

export const Button = styled(IconButton)`
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
