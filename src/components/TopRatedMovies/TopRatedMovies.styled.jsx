import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  padding: 24px 0;
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
