import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

export const Header = styled.header`
  position: relative;
  border-radius: 5px;
  width: 10vw;
  height: auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media ${device.tablet} {
    width: 7vw;
  }

  @media ${device.laptop} {
    width: 3vw;
  }
`;

export const StickyWrap = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  padding: 20px 0;
`;
