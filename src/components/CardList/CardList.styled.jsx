import styled from '@emotion/styled';
import { device } from 'deviceSizes';

export const List = styled.ul`
  width: 100%;
  display: block;
  padding: 15px 0;

  & > li + li {
    margin-top: 10px;

    @media ${device.tablet} {
      margin: 0;
    }
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
`;