import styled from '@emotion/styled';
import { Rating } from '@mui/material';
import { device } from 'helpers/deviceSizes';

export const Container = styled.div`
  position: relative;
`;

export const Card = styled.div`
  width: 85vw;
  border-radius: 10px;
  overflow: hidden;

  & > img {
    width: 100%;
    min-height: 100%;
    background: linear-gradient(
      180deg,
      rgba(29, 29, 29, 0) 0%,
      rgba(29, 29, 29, 0.8) 80.79%
    );
  }

  & > p {
    width: 100%;
    margin-top: 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: ${props => props.theme.textColor};

    @media ${device.tablet} {
      font-weight: 400;
      font-size: 18px;
    }
  }

  @media ${device.tablet} {
    width: 28vw;
  }

  @media ${device.laptop} {
    width: 17vw;
  }
`;

export const Genre = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  background: rgba(29, 29, 29, 0.5);
  border-radius: 0px 8px;
  color: ${props => props.theme.bgElementColor};
`;

export const InfoWrap = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 5px;
  left: 0;
`;

export const Rate = styled(Rating)`
  color: ${({ theme }) => theme.bgElementColor};
`;
