import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from 'react-router-dom';

const modalRoot = document.getElementById('modal');

export default function Modal({ children }) {
  const navigate = useNavigate();

  function modalClose() {
    return navigate(-1);
  }

  return ReactDOM.createPortal(
    <>
      <div className={styles.details__modal}>
        <div id="modal_close" className={styles.modal_close}>
          <CloseIcon type="primary" onClick={() => modalClose()} />
        </div>
        {children}
      </div>
      <ModalOverlay />
    </>,
    modalRoot,
  );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
};
