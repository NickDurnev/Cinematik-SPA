import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';
import { device } from 'helpers/deviceSizes';

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  padding-bottom: 40px;
  overflow: hidden;

  @media ${device.tablet} {
    width: 640px;
  }

  @media ${device.laptopM} {
    width: 1300px;
    padding-bottom: 60px;
  }

  @media ${device.laptopL} {
    width: 1650px;
    padding-bottom: 80px;
  }
`;

export const Slider = styled(Swiper)`
  position: relative;
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
