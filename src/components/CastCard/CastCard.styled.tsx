import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ITheme } from 'services/interfaces';

interface IStyle {
  profile_path?: string;
  theme?: ITheme;
}

export const CardWrap = styled(motion.div)<IStyle>`
  width: 310px;
  height: 465px;
  margin: 0 auto;
  position: relative;
  background-color: ${({ profile_path }) => !profile_path && '#666666'};
  color: ${({ theme }) => theme.linkColor};

  border-radius: 10px;

  & > img {
    width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  & svg {
    width: 120px;
    height: auto;
    stroke: currentColor;
  }
`;

export const InfoWrap = styled.div<IStyle>`
  width: 100%;
  height: 70px;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.navBarBgColor};
  backdrop-filter: blur(12px);
  text-align: start;
`;

export const ActorName = styled.p<IStyle>`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.textColor};
  word-break: break-all;
  white-space: normal;
`;

export const RoleName = styled.p<IStyle>`
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.linkColor};
  word-break: break-all;
  white-space: normal;
`;
