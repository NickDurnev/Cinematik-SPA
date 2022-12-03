import styled from '@emotion/styled';
import { device } from 'deviceSizes';

const Wrap = styled.div`
  width: ${({ isNone }) => (isNone ? '100vw' : '90vw')};
  padding: ${({ isNone }) => (isNone ? '0' : '30px 5px')};

  @media ${device.tablet} {
    width: ${({ isNone }) => (isNone ? '100vw' : '93vw')};
    padding: 0;
  }

  @media ${device.laptop} {
    width: ${({ isNone }) => (isNone ? '100vw' : '97vw')};
    padding: ${({ isNone }) => (isNone ? '0' : '10px 0')};
  }
`;

export default Wrap;
