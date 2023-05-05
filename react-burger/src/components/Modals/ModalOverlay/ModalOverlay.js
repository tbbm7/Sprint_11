import styles from './ModalOverlay.module.css';
import { useEffect } from 'react';

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
