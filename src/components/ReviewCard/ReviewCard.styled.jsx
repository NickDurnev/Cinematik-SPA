import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { device } from 'helpers/deviceSizes';

export const Wrap = styled(motion.li)`
  width: 100%;
  padding-bottom: 80px;
  color: ${({ theme }) => theme.textColor};
  background-color: transparent;
  border-bottom: 0.5px solid ${({ theme }) => theme.textColor};
`;

export const AvatarWrap = styled.div`
  width: 90px;
  margin-bottom: 50px;

  & > img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

export const InfoWrap = styled.div`
  width: 100%;
  text-align: start;

  & p {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: var(--mainTextColor);
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  margin-bottom: 35px;

  @media ${device.laptopM} {
    width: 540px;
    margin-bottom: 50px;
  }

  @media ${device.laptopL} {
    width: 690px;
    margin-bottom: 65px;
  }
`;
