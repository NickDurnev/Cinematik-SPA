import styled from '@emotion/styled';
import { StyledLink } from 'components/MovieInfo/MovieInfo.styled';

export const InfoContainer = styled.div`
  display: flex;
  margin-top: 20px;

  & img {
    width: 400px;
    height: auto;
  }
`;

export const NavLink = styled(StyledLink)`
  margin: 0 auto;
`;
