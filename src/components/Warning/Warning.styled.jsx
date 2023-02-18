import styled from '@emotion/styled';

export const Wrap = styled.div`
  min-width: 280px;
  & > p {
    font-family: 'Technovier';
    font-size: 18px;
    color: ${({ theme }) => theme.textColor};
    margin-bottom: 20px;
  }
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-family: 'Muller';
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    width: 150px;
    padding: 20px;
    color: ${({ theme }) => theme.textColor};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.textColor};
    border-radius: 10px;
    transition: all ${({ theme }) => theme.hoverTransition}
      ${({ theme }) => theme.hoverTimeFunction};

    &:hover,
    &:focus {
      background-color: #4847473c;
    }
  }
`;
