import styled from '@emotion/styled';
import { StyledLink } from 'components/MovieInfo/MovieInfo.styled';
import { device } from 'deviceSizes';

export const InfoContainer = styled.div`
  display: flex;
  margin-top: 20px;

  & img {
    width: width: 85vw;
    max-height: auto;

    @media ${device.tablet} {
      width: 250px;
    }

     @media ${device.laptopL} {
      width: 400px;
    }
  }

  @media ${device.mobileM} {
    display: block;
  }
`;

export const NavLink = styled(StyledLink)`
  margin: 0 auto;
`;
