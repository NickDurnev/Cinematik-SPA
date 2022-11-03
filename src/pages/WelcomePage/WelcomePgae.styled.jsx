import styled from '@emotion/styled';
import image from '../../images/welcomepage_wallpaper_desktop.jpg';

export const Background = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${image});
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  & > div {
    text-transform: capitalize;
    font-size: 80px;
    font-weight: 700;
    padding: 35vh 25vw;
  }
`;
