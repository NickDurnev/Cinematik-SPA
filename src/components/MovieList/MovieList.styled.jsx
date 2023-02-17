import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

export const List = styled.ul`
  width: 310px;
  display: block;
  margin: 0 auto;

  & > li + li {
    margin-top: 20px;

    @media ${device.tablet} {
      margin: 0;
    }
  }

  @media ${device.tablet} {
    width: 640px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    white-space: nowrap;
    gap: 20px;
    justify-items: center;
    align-items: stretch;
  }

  @media ${device.laptopM} {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
