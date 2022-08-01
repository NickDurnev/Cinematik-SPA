import styled from '@emotion/styled';
import { Rating } from '@mui/material';

export const Container = styled.div`
  position: relative;
`;

export const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;

  & > img {
    min-height: 485px;
    background: linear-gradient(
      180deg,
      rgba(29, 29, 29, 0) 0%,
      rgba(29, 29, 29, 0.8) 80.79%
    );
  }

  & > p {
    margin-top: 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: ${props => props.theme.textColor};
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
