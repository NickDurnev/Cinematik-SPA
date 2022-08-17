import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { device } from 'deviceSizes';

export const Wrap = styled.div`
  width: 88vw;

  @media ${device.tablet} {
    width: 91vw;
  }

  @media ${device.laptop} {
    width: 95vw;
  }
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-left: 50px;
  text-align: start;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.bgElementColor};

  &::after {
    content: '>';
    margin-left: 8px;
  }
`;
