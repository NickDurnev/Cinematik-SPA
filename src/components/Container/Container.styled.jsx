import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

const Wrap = styled.div`
  width: 100vw;
  padding: 10px 10px;

  @media ${device.tablet} {
    width: 100vw;
    padding: 0;
  }

  @media ${device.laptop} {
    width: 100vw;
    padding: 40px 40px;
  }
`;

export default Wrap;
