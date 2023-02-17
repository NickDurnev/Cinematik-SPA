import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';

export const Title = styled.p`
  margin-bottom: 20px;
  padding-left: 10px;
  text-align: start;
  font-family: 'Technovier';
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  color: ${({ theme }) => theme.textColor};

  @media ${device.tablet} {
    padding: 0;
  }

  @media ${device.laptopM} {
    margin-bottom: 40px;
    font-size: 25px;
    line-height: 60px;
  }
`;
