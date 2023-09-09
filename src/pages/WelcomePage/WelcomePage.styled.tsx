import styled from '@emotion/styled';
import DesktopImage from '../../images/welcomepage_wallpaper_desktop.jpg';
import MobileImage from '../../images/welcomepage_wallpaper_mobile.jpg';
import { device } from '../../helpers/deviceSizes';

export const Background = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${MobileImage});
  width: 100vw;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      url(${DesktopImage});

    width: 100vw;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  & > div {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    & > div + div {
      margin-top: 40px;
    }
  }
  & h2 {
    font-family: 'Technovier';
    font-size: 30px;
    color: #ffffffd3;

    @media ${device.tablet} {
      font-size: 60px;
    }

    @media ${device.laptopM} {
      font-size: 70px;
    }

    @media ${device.laptopL} {
      font-size: 80px;
    }
  }
`;
