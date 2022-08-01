import styled from '@emotion/styled';

export const Wrap = styled.div`
  padding: 24px 0;
`;

export const Title = styled.p`
  align-items: center;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: ${({ theme }) => theme.bgElementColor};
`;
