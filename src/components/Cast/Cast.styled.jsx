import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

const CastList = styled.ul`
  width: 100%;
  display: block;
  padding: 15px 0;
  margin: 0 auto;

  & > li {
    width: 300px;
  }

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
    gap: 10px;
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

export default CastList;
