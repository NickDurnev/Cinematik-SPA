import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';
import { device } from 'helpers/deviceSizes';

export const Wrap = styled.div`
  width: 100%;
  & + & {
    margin-top: 10px;
  }

  @media ${device.mobileM} {
    & + & {
      margin-top: 0;
    }
  }
`;

export const SkeletonRectangle = styled(Skeleton)`
  width: 100%;
  height: 400px;
`;

export const SkeletonText = styled(Skeleton)`
  width: 100%;
  height: 30px;
`;

export const Container = styled.div`
  width: 95vw;
  display: block;

  @media ${device.tablet} {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    justify-items: center;
    align-items: stretch;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
