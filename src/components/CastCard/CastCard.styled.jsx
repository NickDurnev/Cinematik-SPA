import styled from '@emotion/styled';

export const CardWrap = styled.div`
  width: calc((100vw - 20px) / 8);
  margin: 10px;
  background-color: ${props => props.theme.bgCastCard};
  border-radius: 5px;
  & > img {
    width: 100%;
    height: auto;
  }
  & > div {
    min-height: 100px;
    padding: 5px;
    color: ${props => props.theme.textColor};
  }
`;

export const RoleName = styled.p`
  padding-top: 10px;
  font-style: italic;
  margin-bottom: 5px;
`;

export const ActorName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
