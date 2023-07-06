import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import OrderListElement from '../OrderListElement/OrderListElement';
import styles from './OrderList.module.css';
import { IOrderList } from '../../services/types/data';

const OrderList: FC<IOrderList> = ({ isFeedList, orders }) => {
  return (
    <div className={styles.order__list}>
      {orders.map((order) => {
        return <OrderListElement key={uuidv4()} order={order} isFeedList={isFeedList} />;
      })}
    </div>
  );
};

export default OrderList;
