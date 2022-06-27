import styled from 'styled-components';

const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 20;
  border-radius: 5px;
  width: 100%;
  height: 100px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: ${props => props.theme.bgHeader};
`;

export default Header;
