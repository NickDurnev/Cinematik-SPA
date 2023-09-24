import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import { ITheme } from 'services/interfaces';
import { device } from '../../helpers/deviceSizes';

export const AvatarWrap = styled(Avatar) <{ theme?: ITheme }>`
  width: 40px;
  height: 40px;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.05em;
  background-color: transparent;
  color: ${({ theme }) => theme.textColor};
  border: 1px solid;
  border-color: ${({ theme }) => theme.textColor};

  @media ${device.tablet} {
    width: 60px;
    height: 60px;
    font-size: 30px;
  }
`;
