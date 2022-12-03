import styled from '@emotion/styled';
import { device } from 'deviceSizes';

export const PageWrap = styled.div`
  width: calc(90vw- 20px);
  padding: 0 10px;

  @media ${device.tablet} {
    width: calc(93vw- 20px);
  }

  @media ${device.laptop} {
    width: calc(98vw- 40px);
    padding: 0 20px;
  }
`;
