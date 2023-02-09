import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backdropColor};
  color: ${({ theme }) => theme.textColor};
  overflow-y: scroll;
`;

export const StyledModal = styled(motion.div)`
  position: absolute;
  top: ${({ positionY }) => positionY};
  left: ${({ positionX }) => positionX};
  padding: ${({ padding }) => padding};
  border-radius: 5px;
  text-align: center;
  background-color: ${({ theme }) => theme.modalBgColor};
  font-weight: ${({ theme }) => theme.mainTextFontWeight};
`;
