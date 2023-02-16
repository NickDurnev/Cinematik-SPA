import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { device } from 'helpers/deviceSizes';

export const LinkWrap = styled.div`
  width: 100%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 90%;
    margin: 100px auto;
  }

  @media ${device.laptopM} {
    width: 950px;
  }
`;

export const StyledLink = styled(Link)`
  padding: 5px;
  font-family: 'Technovier';
  font-size: 15px;
  line-height: 17px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  background-color: inherit;
  transition: all ${props => props.theme.hoverTransition}
    ${props => props.theme.hoverTimeFunction};

  &:hover,
  &:focus,
  &:visited {
    color: ${props => props.theme.textColor};
  }

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 21px;
  }
`;
