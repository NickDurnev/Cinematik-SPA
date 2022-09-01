import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { device } from 'deviceSizes';

export const Wrap = styled.div`
  width: 88vw;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 91vw;
  }

  @media ${device.laptop} {
    width: 93vw;
  }
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 50px;
  text-align: start;
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  color: ${({ theme }) => theme.bgElementColor};

  @media ${device.tablet} {
    margin: 10px 0;
  }

  &::after {
    content: '>';
    margin-left: 8px;
  }
`;
