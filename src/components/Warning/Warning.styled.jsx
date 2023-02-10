import styled from '@emotion/styled';

export const Wrap = styled.div`
  min-width: 280px;
  & > p {
    font-family: 'Technovier';
    font-size: 18px;
    color: #ffffffd3;
    margin-bottom: 20px;
  }
  & > a {
    display: block;
    width: 100px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.elementColor};
    background-color: ${({ theme }) => theme.bgElementColor};
    transition: all ${({ theme }) => theme.hoverTransition}
      ${({ theme }) => theme.hoverTimeFunction};

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.bgElementHoverColor};
    }
  }
`;
