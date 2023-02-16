import styled from '@emotion/styled';

export const CardWrap = styled.div`
  width: 300px;
  height: 465px;
  margin: 10px;
  position: relative;
  background-color: ${({ poster_path }) => !poster_path && '#666666'};
  color: ${({ theme }) => theme.linkColor};

  border-radius: 10px;

  & > img {
    width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  & svg {
    width: 120px;
    height: auto;
    stroke: currentColor;
  }
`;

export const InfoWrap = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(29, 29, 29, 0.5);
  backdrop-filter: blur(12px);
  text-align: start;
`;

export const ActorName = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: ${props => props.theme.textColor};
`;

export const RoleName = styled.p`
  font-size: 16px;
  line-height: 16px;
  color: ${props => props.theme.linkColor};
`;
