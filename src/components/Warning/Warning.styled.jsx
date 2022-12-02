import styled from '@emotion/styled';

export const Wrap = styled.div`
  & > p {
    font-size: 18px;
    color: ${props => props.theme.textColor};
    margin-bottom: 10px;
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
