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
  top: ${({ positiony }) => (positiony ? positiony : '50%')};
  left: ${({ positionx }) => (positionx ? positionx : '50%')};
  padding: ${({ padding }) => padding && padding};
  background-color: ${({ bcgcolor }) =>
    bcgcolor ? '#aba7a731' : 'transparent'};
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  font-weight: ${({ theme }) => theme.mainTextFontWeight};
`;
