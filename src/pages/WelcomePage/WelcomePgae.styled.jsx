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
  height: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  & > div {
    width: 97vw;
    height: 100vh;
    padding: 30vh 20vw;
  }

  & div {
    text-transform: capitalize;
    font-size: 80px;
    font-weight: 700;
    color: #ffffffd3;
  }
`;
