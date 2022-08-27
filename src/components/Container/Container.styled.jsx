import styled from '@emotion/styled';
import { device } from 'deviceSizes';

const Wrap = styled.div`
  width: 90vw;
  padding: 30px 5px;

  @media ${device.tablet} {
    width: 93vw;
    padding: 0;
  }

  @media ${device.laptop} {
    width: 97vw;
    padding: 10px 0;
  }
`;

export default Wrap;
