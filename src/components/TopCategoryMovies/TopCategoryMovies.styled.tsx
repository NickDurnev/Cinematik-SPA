import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { device } from 'helpers/deviceSizes';

export const Wrap = styled.div`
  width: 310px;
  margin: 0 auto;
  padding-bottom: 40px;
  overflow: hidden;

  @media ${device.tablet} {
    width: 640px;
    flex-wrap: nowrap;
  }

  @media ${device.laptopM} {
    width: 1300px;
    padding-bottom: 60px;
  }

  @media ${device.laptopL} {
    width: 1650px;
    padding-bottom: 80px;
  }
`;

export const Title = styled(Link)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-align: start;
  font-family: 'Technovier';
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  transition: all ${({ theme }) => theme.hoverTransition}
    ${({ theme }) => theme.hoverTimeFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.linkColor};
  }

  @media ${device.laptopM} {
    margin-bottom: 40px;
    font-size: 25px;
    line-height: 60px;
  }

  &::after {
    content: '>';
    margin-left: 8px;
  }
`;
