import styled from '@emotion/styled';

export const List = styled.ul`
  width: 70%;
  margin: 0 auto;
  padding: 10px 20px;
`;

export const Item = styled.li`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.bgCastCard};
  border-radius: 5px;
  & + & {
    margin-top: 10px;
  }

  & > div:first-child {
    min-width: 100px;
  }
`;

export const AvatarContainer = styled.div`
  margin-bottom: 5px;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const Info = styled.div`
  width: 95%;
  & p + p {
    margin-top: 5px;
  }
`;

export const Date = styled.p`
  font-size: 20px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
