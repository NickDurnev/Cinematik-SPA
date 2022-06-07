import React from 'react';
import ContentLoader from 'react-content-loader';
import { Container } from './GallerySkeleton.styled';

const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    style={{ width: '100%', height: 'auto' }}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="110" y="466" rx="2" ry="2" width="140" height="10" />
    <rect x="32" y="-24" rx="0" ry="0" width="384" height="400" />
    <rect x="32" y="400" rx="0" ry="0" width="392" height="31" />
  </ContentLoader>
);

const GallerySkeleton = () => {
  return (
    <Container>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Container>
  );
};

export default GallerySkeleton;
