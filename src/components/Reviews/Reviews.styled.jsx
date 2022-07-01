import styled from 'styled-components';

export const List = styled.ul`
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
