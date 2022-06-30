import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Modal, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const TrailerModal = ({ children, onModal }) => {
  const onClickClose = e => {
    if (e.target.nodeName === 'DIV') {
      onModal(false);
    }
  };

  return createPortal(
    <Backdrop onClick={onClickClose}>
      <Modal>{children}</Modal>
    </Backdrop>,
    modalRoot
  );
};

TrailerModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrailerModal;
