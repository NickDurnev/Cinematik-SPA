import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { device } from 'deviceSizes';

export const ThemeToggler = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 10px;

  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.bgIconColor};
  color: ${props => props.theme.iconColor};

  @media ${device.laptop} {
    width: 50px;
    height: 50px;
  }
`;