import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { modalVariants } from 'helpers/animations';
import { StyledModal, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({
  children,
  onModal,
  padding = 'none',
  positionY = '50%',
  positionX = '50%',
}) => {
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
        positionY={positionY}
        positionX={positionX}
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
  positionY: PropTypes.string,
  positionX: PropTypes.string,
};

export default Modal;
