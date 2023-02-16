import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';

export const Wrap = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  max-width: 100vw;
  min-height: 100vh;
  box-shadow: ${({ theme }) => theme.boxShadow};
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  background: rgb(31, 24, 17);
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.gradDark} 0%,
    ${({ theme }) => theme.gradLight} 100%
  );
  & > h1,
  h2 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.textColor};
  }
`;

export const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    color: ${({ theme }) => theme.textColor};
    background-color: #fafafa;
    font-family: 'Muller', sans-serif;
    & > button {
      color: ${({ theme }) => theme.textColor};
    }
  }
`;
