import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

export const Container = styled.div`
  position: relative;
`;

export const Card = styled.div`
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
    color: ${props => props.theme.textColor};
    word-break: break-all;
    white-space: normal;

    @media ${device.tablet} {
      font-weight: 400;
      font-size: 18px;
    }
  }
`;

export const Genre = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  font-size: 16px;
  line-height: 16px;
  background: rgba(29, 29, 29, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 0px 10px;
  color: ${props => props.theme.linkColor};
`;

export const InfoWrap = styled.div`
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
