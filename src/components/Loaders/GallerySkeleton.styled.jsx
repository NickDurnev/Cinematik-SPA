import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';

export const Wrap = styled.div`
  width: 100%;
`;

export const SkeletonRectangle = styled(Skeleton)`
  width: 100%;
  height: 300px;
`;

export const SkeletonText = styled(Skeleton)`
  width: 100%;
  height: 30px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 40px 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  justify-items: center;
  align-items: stretch;
`;
