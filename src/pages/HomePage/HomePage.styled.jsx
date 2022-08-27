import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { device } from 'deviceSizes';

export const InputWrap = styled(Paper)`
  width: 80vw;
  margin-left: auto;
  margin-bottom: 10px;
  border: 2px solid #fff;
  transition: border-color ${({ theme }) => theme.hoverTransition}
    ${({ theme }) => theme.hoverTimeFunction};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.bgElementColor};
  }

  @media ${device.tablet} {
    width: 30vw;
  }

  @media ${device.laptop} {
    width: 20vw;
  }
`;
