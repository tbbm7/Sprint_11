import styles from './BurgerTotalBlock.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import OrderDetails from '../Modals/OrderDetails/OrderDetails';
import Modal from '../Modals/Modal/Modal';
import { createOrder } from '../../services/actions/order';
import { FC } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import { useNavigate } from 'react-router-dom';
import { IBurgerTotalBlock } from '../../services/types/data';
import { resetOrder } from '../../services/actions/order';
import { resetIngredient } from '../../services/actions/constructor';

const BurgerTotalBlock: FC<IBurgerTotalBlock> = ({ ingredients, totalPrice }) => {
  const [modal, isModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.userReducer.isAuth);

  const navigate = useNavigate();

  const onClickButton = () => {
    isModalOpen(!modal);
    isAuth ? dispatch(createOrder(ingredients)) : navigate('/login');
  };

  function closeModal() {
    dispatch(resetOrder());
    dispatch(resetIngredient());
    isModalOpen(!modal);
  }

  return (
    <div className={styles.constructor__total}>
      <div className={styles.constructor__order}>
        <p className="text text_type_digits-default">{totalPrice}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        disabled={!ingredients.bun}
        onClick={onClickButton}
        htmlType="button"
        type="primary"
        size="small"
        extraClass="ml-10">
        <p className="text text_type_main-default">Оформить заказ</p>
      </Button>
      {modal && (
        <Modal onCloseModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export default BurgerTotalBlock;
