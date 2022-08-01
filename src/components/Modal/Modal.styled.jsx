import styled from '@emotion/styled';

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

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  background-color: ${props => props.theme.modalBgColor};
  font-weight: ${props => props.theme.mainTextFontWeight};

  & > p {
    margin-bottom: 10px;
  }

  & button + button {
    margin-left: 20px;
  }
`;
