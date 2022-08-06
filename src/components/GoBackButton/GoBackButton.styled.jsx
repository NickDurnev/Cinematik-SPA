import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';

const Wrap = styled(IconButton)`
  position: sticky;
  top: 0;
  right: 95vw;
  z-index: 2;
  color: ${({ theme }) => theme.bgElementColor};
  width: 60px;
  height: 60px;

  & > svg {
    width: 40px;
    height: 40px;
  }
`;

export default Wrap;
