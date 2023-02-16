import styled from '@emotion/styled';

const Wrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  font-family: 'Muller';
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  width: 150px;
  height: 70px;
  padding: ${({ padding }) => padding};
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
`;

export default Wrap;
