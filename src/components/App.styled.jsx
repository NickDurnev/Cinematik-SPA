import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';

export const Wrap = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  max-width: 100vw;
  min-height: 100vh;
  box-shadow: ${props => props.theme.boxShadow};
  text-align: center;
  color: ${props => props.theme.textColor};
  background: rgb(31, 24, 17);
  background: linear-gradient(
    180deg,
    ${props => props.theme.gradDark} 0%,
    ${props => props.theme.gradLight} 50%,
    ${props => props.theme.gradDark} 100%
  );

  & > h1,
  h2 {
    margin-bottom: 10px;
    color: ${props => props.theme.textColor};
  }
`;

export const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
    & > button {
      color: ${({ theme }) => theme.textColor};
    }
  }
`;
