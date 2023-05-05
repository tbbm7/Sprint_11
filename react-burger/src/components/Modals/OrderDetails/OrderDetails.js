import styles from './OrderDetails.module.css';
import image from '../../../images/done.svg';
import { useSelector } from 'react-redux';

export default function OrderDetails() {
  const orderNum = useSelector((store) => store.orderList.order);

  return (
    <>
      {orderNum !== undefined && (
        <h2 className={`text text_type_digits-large mt-30 ${styles.order_details__header}`}>
          {orderNum}
        </h2>
      )}
      {orderNum === undefined && <div className={`mt-30 ${styles.order_details__loader}`}></div>}
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className={`mt-15 ${styles.order_details__image}`} src={image} alt="Окно заказа" />
      <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}
