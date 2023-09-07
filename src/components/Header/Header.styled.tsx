import styled from '@emotion/styled';
import { device } from '../../helpers/deviceSizes';

export const Wrap = styled.div`
  width: 320px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 60px;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 450px;
    margin-right: 0;
    margin-bottom: 30px;
    margin-left: auto;
  }
`;
