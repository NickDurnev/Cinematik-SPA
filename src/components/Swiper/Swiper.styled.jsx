import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const Slider = styled(Swiper)`
  position: relative;
  width: 95vw;
  height: auto;
`;

export const NavPrevWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
`;

export const NavNextWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
`;
