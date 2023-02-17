import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

export const List = styled.ul`
  padding: 40px 0;
  margin: 0 auto;

  & > li + li {
    margin-top: 55px;

    @media ${device.laptop} {
      margin-top: 80px;
    }
  }

  @media ${device.tablet} {
    width: 500px;
  }

  @media ${device.laptopM} {
    width: 685px;
  }

  @media ${device.laptopL} {
    width: 900px;
  }
`;
