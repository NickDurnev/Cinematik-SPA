import styled from '@emotion/styled';
import { device } from 'deviceSizes';

export const Frame = styled.iframe`
  width: 300px;
  height: 200px;
  border: none;
  border-radius: 5px;
  background-color: inherit;

  @media ${device.tablet} {
    width: 600px;
    height: 400px;
  }
`;
