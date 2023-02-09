import styled from '@emotion/styled';
import { StyledLink } from 'components/MovieInfo/MovieInfo.styled';
import { device } from 'helpers/deviceSizes';

export const Container = styled.div`
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    width: 93vw;
    display: flex;
    margin-top: 0;
  }
`;

export const InfoContainer = styled.div`
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    width: 93vw;
    display: flex;
    margin-top: 0;
  }

  & img {
    max-width: 365px;
    margin: 0 auto;
    max-height: auto;

    @media ${device.tablet} {
      width: 250px;
    }

    @media ${device.laptopL} {
      width: 400px;
    }
  }
`;

export const NavLink = styled(StyledLink)`
  margin: 0 auto;
`;
