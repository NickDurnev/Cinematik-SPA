import { FC, MouseEventHandler, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { modalVariants } from 'helpers/animations';
import { StyledModal, Backdrop } from './Modal.styled';

interface IProps {
  children: ReactNode;
  onModal?: (value: boolean) => void;
}

const modalRoot = document.querySelector('#modal-root');

const Modal: FC<IProps> = props => {
  if (!modalRoot) return null;

  const { children, onModal, ...rest } = props;
  const onClickClose: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.nodeName === 'DIV' && onModal) {
      onModal(false);
    }
  };

  return createPortal(
    <Backdrop onClick={onClickClose}>
      <StyledModal
        initial={'closed'}
        animate={'open'}
        exit={'closed'}
        variants={modalVariants}
        {...rest}
      >
        {children}
      </StyledModal>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
