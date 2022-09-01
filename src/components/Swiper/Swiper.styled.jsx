import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';
import { device } from 'deviceSizes';

export const Slider = styled(Swiper)`
  position: relative;
  width: 95%;
  height: auto;

  @media ${device.tablet} {
    padding: 10px 0;
  }
`;

export const NavPrevWrap = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;

  @media ${device.laptopL} {
    top: 45%;
  }
`;

export const NavNextWrap = styled.div`
  position: absolute;
  top: 40%;
  right: 0;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;

  @media ${device.laptopL} {
    top: 45%;
    right: 15px;
  }
`;
