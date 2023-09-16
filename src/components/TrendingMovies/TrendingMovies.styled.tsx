import styled from '@emotion/styled';
import { device } from 'helpers/deviceSizes';
import { ITheme } from 'services/interfaces';

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  padding-bottom: 40px;
  overflow: hidden;

  @media ${device.tablet} {
    width: 640px;
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

export const Title = styled.p<{ theme?: ITheme }>`
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
