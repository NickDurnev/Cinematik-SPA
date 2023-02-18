import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { modalVariants } from 'helpers/animations';
import { StyledModal, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = props => {
  const { children, onModal, ...rest } = props;
  const onClickClose = e => {
    if (e.target.nodeName === 'DIV' && onModal) {
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

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onModal: PropTypes.func,
  padding: PropTypes.string,
  positiony: PropTypes.string,
  positionx: PropTypes.string,
  bcgcolor: PropTypes.string,
};

export default Modal;
