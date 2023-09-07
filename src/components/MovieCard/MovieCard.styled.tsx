import styled from '@emotion/styled';
import { ITheme, IMovie } from 'services/interfaces';
import { device } from 'helpers/deviceSizes';

interface IStyles {
  theme?: ITheme;
  poster_path: IMovie['poster_path'];
}

export const Container = styled.div`
  position: relative;
`;

export const Card = styled.div<IStyles>`
  width: 310px;
  height: 465px;
  overflow: hidden;
  background-color: ${({ poster_path }) => !poster_path && '#666666'};
  color: ${({ theme }) => theme.linkColor};

  & > div {
    height: 100%;
  }

  & img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: linear-gradient(
      180deg,
      rgba(29, 29, 29, 0) 0%,
      rgba(29, 29, 29, 0.8) 80.79%
    );
  }

  & svg {
    width: 150px;
    height: auto;
    stroke: currentColor;
  }

  & p {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: ${({ theme }) => theme.textColor};
    word-break: break-all;
    white-space: normal;

    @media ${device.tablet} {
      font-weight: 400;
      font-size: 18px;
    }
  }
`;

export const Genre = styled.span<{ theme?: ITheme }>`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  font-size: 16px;
  line-height: 16px;
  background: rgba(29, 29, 29, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 0px 10px;
  color: ${({ theme }) => theme.linkColor};
`;

export const InfoWrap = styled.div<{ theme?: ITheme }>`
  width: 100%;
  height: 90px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 15px 10px;
  text-align: start;
  background: ${({ theme }) => theme.navBarBgColor};
  backdrop-filter: blur(12px);
`;
