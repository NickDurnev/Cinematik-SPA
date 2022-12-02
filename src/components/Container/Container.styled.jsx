import styled from '@emotion/styled';
import { device } from 'deviceSizes';

const Wrap = styled.div`
  padding: ${({ isNone }) => (isNone ? '100vw' : '90vw')};
  /* width: 90vw; */
  padding: ${({ isNone }) => (isNone ? '0' : '30px 5px')};
  /* padding: 30px 5px; */

  @media ${device.tablet} {
    padding: ${({ isNone }) => (isNone ? '100vw' : '93vw')};
    /* width: 93vw; */
    padding: 0;
  }

  @media ${device.laptop} {
    padding: ${({ isNone }) => (isNone ? '100vw' : '97vw')};
    /* width: 97vw; */
    padding: ${({ isNone }) => (isNone ? '0' : '10px 0')};
    /* padding: 10px 0; */
  }
`;

export default Wrap;
