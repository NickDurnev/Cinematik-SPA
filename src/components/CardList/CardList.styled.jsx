import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

export const List = styled.ul`
  width: 100%;
  display: block;
  padding: 15px 0;

  & > li + li {
    margin-top: 20px;

    @media ${device.tablet} {
      margin: 0;
    }
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    white-space: nowrap;
    gap: 20px;
    justify-items: center;
    align-items: stretch;
  }

  @media ${device.laptopM} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
