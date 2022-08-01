import styled from '@emotion/styled';

const Wrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  width: 150px;
  height: 70px;
  padding: ${({ theme }) => theme.padding};
  color: ${({ theme }) => theme.elementColor};
  background-color: ${({ theme }) => theme.bgElementColor};
  transition: all ${({ theme }) => theme.hoverTransition}
    ${({ theme }) => theme.hoverTimeFunction};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.bgElementHoverColor};
  }
`;

export default Wrap;
