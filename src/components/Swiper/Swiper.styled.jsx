import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';
import { device } from 'helpers/deviceSizes';

export const Slider = styled(Swiper)`
  position: relative;
  width: 310px;
  height: auto;

  @media ${device.tablet} {
    width: 640px;
  }

  /* @media ${device.laptop} {
    width: 970px;
  } */

  @media ${device.laptopM} {
    width: 1300px;
  }

  @media ${device.laptopL} {
    width: 1650px;
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
