import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { modalVariants } from 'animations';
import { StyledModal, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onModal, padding = 'none' }) => {
  const onClickClose = e => {
    if (e.target.nodeName === 'DIV') {
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
        padding={padding}
      >
        {children}
      </StyledModal>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onModal: PropTypes.func.isRequired,
};

export default Modal;
