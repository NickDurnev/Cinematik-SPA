import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

export const List = styled.ul`
  width: 85vw;
  padding: 10px 5px;

  @media ${device.tablet} {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  @media ${device.laptop} {
    width: 70%;
  }
`;

export const Item = styled.li`
  display: block;
  padding: 5px;
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

  @media ${device.tablet} {
    display: flex;
    padding: 20px;
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
  width: 100%;
  & p + p {
    margin-top: 5px;
  }

  @media ${device.tablet} {
    width: 95%;
  }
`;

export const Date = styled.p`
  font-size: 20px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
