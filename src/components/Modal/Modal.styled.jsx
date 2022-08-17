import styled from '@emotion/styled';
import { device } from 'deviceSizes';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.backdropColor};
  color: ${props => props.theme.textColor};
  overflow-y: scroll;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* min-width: 300px;
  height: 400px; */
  border-radius: 5px;
  text-align: center;
  background-color: ${props => props.theme.modalBgColor};
  font-weight: ${props => props.theme.mainTextFontWeight};

  @media ${device.mobileM} {
    height: 200px;
  }
`;
