import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, FC } from 'react';
import { IModal } from '../../../services/types/data';

const modalRoot = document.getElementById('modal') as HTMLElement;

const Modal: FC<IModal> = ({ onCloseModal, children, isModalRoute }) => {
  const navigate = useNavigate();

  function modalClose() {
    if (isModalRoute) {
      return navigate(-1);
    } else {
      onCloseModal && onCloseModal();
    }
  }

  function modalEscClose(evt: { key: string }) {
    if (evt.key === 'Escape') {
      modalClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', modalEscClose);
    return () => {
      document.removeEventListener('keydown', modalEscClose);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={styles.details__modal}>
        <div id="modal_close" className={styles.modal_close}>
          <CloseIcon type="primary" onClick={() => modalClose()} />
        </div>
        {children}
      </div>
      <ModalOverlay onCloseModal={() => modalClose()} />
    </>,
    modalRoot,
  );
};

export default Modal;
