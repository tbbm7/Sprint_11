import styles from './ModalOverlay.module.css';
import { FC } from 'react';

interface IModalOverlay {
  onCloseModal: () => void;
}

const ModalOverlay: FC<IModalOverlay> = ({ onCloseModal }) => {
  return <div className={styles.modal_overlay}  onClick={onCloseModal}></div>;
};

export default ModalOverlay;
