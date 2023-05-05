import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('modal');

export default function Modal({ children, toggleModal }) {
  return ReactDOM.createPortal(
    <>
      <div className={styles.details__modal}>
        <div id="modal_close" className={styles.modal_close}>
          <CloseIcon type="primary" onClick={() => toggleModal()} />
        </div>
        {children}
      </div>
      <ModalOverlay toggleModal={toggleModal} />
    </>,
    modalRoot,
  );
}

Modal.propTypes = {
  children: PropTypes.object,
  toggleModal: PropTypes.func,
};
