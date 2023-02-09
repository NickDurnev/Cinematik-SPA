import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

export const Container = styled.div`
  width: 100px;
  padding: 10px 5px;

  @media ${device.tablet} {
    width: 95vw;
    margin: 0 auto;
  }

  @media ${device.laptop} {
    width: 95vw;
  }
`;
