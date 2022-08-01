import React from 'react';
import { Skeleton } from '@mui/material';
import {
  Wrap,
  SkeletonRectangle,
  SkeletonText,
  Container,
} from './GallerySkeleton.styled';

const SkeletonWrap = () => (
  <Wrap>
    <SkeletonRectangle variant="rectangular" animation="wave" />
    <SkeletonText variant="text" animation="wave" />
  </Wrap>
);

const GallerySkeleton = () => {
  return (
    <Container>
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
    </Container>
  );
};

export default GallerySkeleton;
