import { FC } from 'react';
import OrderListElement from '../OrderListElement/OrderListElement';
import styles from './OrderList.module.css';
import { IOrderList } from '../../services/types/data';


const OrderList: FC<IOrderList> = ({ orders, isPageOrders }) => {
  return (
    <div className={styles.order__list}>
      {orders.map((order, index) => {
        return <OrderListElement key={index} order={order} isPageOrders= {isPageOrders}/>;
      })}
    </div>
  );
};

export default OrderList;
