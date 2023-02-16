import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';
import { device } from 'helpers/deviceSizes';

export const Wrap = styled.div`
  width: 100%;
  & + & {
    margin-top: 20px;
  }

  @media ${device.mobileM} {
    & + & {
      margin-top: 0;
    }
  }
`;

export const SkeletonRectangle = styled(Skeleton)`
  width: 310px;
  height: 465px;
`;

export const SkeletonText = styled(Skeleton)`
  width: 310px;
  height: 30px;
`;

export const Container = styled.div`
  width: 100%;
  display: block;

  @media ${device.tablet} {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    white-space: nowrap;
    gap: 20px;
    justify-items: center;
    align-items: stretch;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptopM} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
