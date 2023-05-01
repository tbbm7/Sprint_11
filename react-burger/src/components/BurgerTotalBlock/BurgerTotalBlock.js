import styles from './BurgerTotalBlock.module.css';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react'
import OrderDetails from '../Modals/OrderDetails/OrderDetails'


const modalRoot = document.getElementById("modal");

export default function BurgerTotalBlock({
  }) 
  {
  const [modal, isModalOpen] = React.useState(false);

  const toggleModal = () => {
    isModalOpen(!modal);
  }
  
  {
   return (
    <div className={styles.constructor__total}>
      <div className={styles.constructor__order}>
        <p className="text text_type_digits-default">123488</p>
        <CurrencyIcon type="primary"/>
      </div>
      <Button onClick= {toggleModal} htmlType="button" type="primary" size="small" extraClass="ml-10" >
        <p className="text text_type_main-default">
          Оформить заказ
        </p>
      </Button>
    {modal && <OrderDetails isModalOpened={modal} toggleModal={toggleModal}/>}
    </div>
   )
}
  }
