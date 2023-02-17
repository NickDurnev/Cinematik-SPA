import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { device } from 'helpers/deviceSizes';

export const ImageWrap = styled.div`
  width: 310px;
  height: 465px;
  background-color: ${({ profile_path }) => !profile_path && '#666666'};
  color: ${({ theme }) => theme.linkColor};

  @media ${device.tablet} {
    width: 250px;
    height: 400px;
  }

  @media ${device.laptopM} {
    width: 400px;
    height: 600px;
  }

  & > img {
    width: 100%;
    height: 100%;
  }

  & svg {
    width: 150px;
    height: auto;
    stroke: currentColor;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-family: 'Muller';
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  width: 140px;
  height: 70px;
  padding: ${({ padding }) => padding};
  color: ${({ theme }) => theme.textColor};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 10px;
  transition: all ${({ theme }) => theme.hoverTransition}
    ${({ theme }) => theme.hoverTimeFunction};

  &:hover,
  &:focus {
    background-color: #4847473c;
  }
`;
