import styles from './ModalOverlay.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ModalOverlay({ toggleModal }) {
  const closeModalEsc = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.key === 'Escape') {
      toggleModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModalEsc);
    return () => {
      document.removeEventListener('keydown', closeModalEsc);
    };
  }, []);

  return <div className={styles.modal_overlay} onClick={toggleModal}></div>;
}

ModalOverlay.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};