import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const Container = styled.div`
  width: 95vw;
  padding: 10px 5px;
`;

export const InputWrap = styled(Paper)`
  margin-left: auto;
  border: 2px solid #fff;
  transition: border-color ${({ theme }) => theme.hoverTransition}
    ${({ theme }) => theme.hoverTimeFunction};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.bgElementColor};
  }
`;
