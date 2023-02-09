import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

export const Frame = styled.iframe`
  width: 360px;
  height: 230px;
  border: none;
  border-radius: 5px;
  background-color: inherit;

  @media ${device.tablet} {
    width: 600px;
    height: 400px;
  }
`;
