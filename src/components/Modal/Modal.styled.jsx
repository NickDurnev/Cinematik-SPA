import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.backdropColor};
  color: ${props => props.theme.textColor};
  overflow-y: scroll;
`;

export const StyledModal = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: ${({ padding }) => padding};
  border-radius: 5px;
  text-align: center;
  background-color: ${props => props.theme.modalBgColor};
  font-weight: ${props => props.theme.mainTextFontWeight};
`;
