import styled from '@emotion/styled';
import { ITheme } from 'services/interfaces';
import IconButton from '@mui/material/IconButton';
import { device } from 'helpers/deviceSizes';

const Wrap = styled(IconButton) <{ theme?: ITheme }>`
  position: absolute;
  top: 55px;
  left: 50px;
  z-index: 2;
  color: ${({ theme }) => theme.textColor};
  width: 60px;
  height: 60px;
  transition: all ${({ theme }) => theme.hoverTransition} ${({ theme }) => theme.hoverTimeFunction};

  & > svg {
    stroke: currentColor;
    width: 40px;
    height: 40px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.linkColor};
  }

  @media ${device.tablet} {
    top: 15px;
    left: 85px;
  }

  @media ${device.laptopM} {
    left: 100px;
  }

  @media ${device.laptopL} {
    top: 85px;
    left: 200px;
  }
`;

export default Wrap;
