import styled from '@emotion/styled';
import { device } from 'deviceSizes';

export const Wrap = styled.div`
  width: 88vw;

  @media ${device.tablet} {
    width: 91vw;
  }

  @media ${device.laptop} {
    width: 95vw;
  }
`;

export const Title = styled.p`
  align-items: center;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: ${({ theme }) => theme.bgElementColor};
`;
