import styled from '@emotion/styled';
import { device } from '../../helpers/deviceSizes';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: auto;
  width: 320px;

  @media ${device.tablet} {
    width: 450px;
  }
`;
