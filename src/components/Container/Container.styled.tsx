import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

const Wrap = styled.div<{userID: string}>`
  width: calc(100vw-50);
  padding: 5px;
  flex-grow: 1;
  overflow: hidden;

  @media ${device.tablet} {
    width: calc(100vw-80);
    padding: 15px;
  }

  @media ${device.laptopM} {
    width: calc(100vw-120);
  }

  @media ${device.laptopL} {
    padding: 85px;
    padding-right: 50px;
  }
`;

export default Wrap;
