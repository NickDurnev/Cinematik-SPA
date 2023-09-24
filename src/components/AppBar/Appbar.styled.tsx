import styled from '@emotion/styled';
import { ITheme } from 'services/interfaces';
import { ReactComponent as LogoIcon } from '../../images/icons/Logo.svg';
import { device } from 'helpers/deviceSizes';

export const Header = styled.header<{ theme?: ITheme }>`
  position: relative;
  width: 50px;
  height: auto;
  background: ${({ theme }) => theme.navBarBgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);

  @media ${device.tablet} {
    width: 80px;
  }

  @media ${device.laptopM} {
    width: 90px;
  }

  @media ${device.laptopL} {
    width: 120px;
  }
`;

export const StickyWrap = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  padding: 25px 0;
  width: 100%;
`;

export const Logo = styled(LogoIcon)`
  width: 40px;
  height: 40px;

  @media ${device.tablet} {
    width: 75px;
    height: 75px;
  }
`;
