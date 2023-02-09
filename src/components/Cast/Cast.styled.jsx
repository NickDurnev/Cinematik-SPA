import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

const CastList = styled.ul`
  width: 85vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export default CastList;
