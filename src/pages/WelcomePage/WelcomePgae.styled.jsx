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
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  & > div {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div + div {
      margin-top: 40px;
    }
  }

  & h2 {
    margin: 0;
    text-transform: capitalize;
    font-family: 'Technovier';
    font-size: 80px;
    font-weight: bold;
    color: #ffffffd3;
  }
`;
