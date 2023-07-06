import { useEffect, FC } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import styles from './feed-page.module.css';
import OrderList from '../../components/OrderList/OrderList';
import OrderCounters from '../../components/OrderCounters/OrderCounters';
import {
  wsConnectionStartOrdersAction,
  wsConnectionClosedOrdersAction,
} from '../../services/actions/wsAction';

export const FeedPage: FC | any = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStartOrdersAction());
    return () => {
      dispatch(wsConnectionClosedOrdersAction());
    };
  }, []);

  const { orders, total, totalToday } = useSelector((store) => store.wsReducer);

  const ordersDone = orders.filter((item) => item.status === 'done');
  const ordersCreated = orders.filter((item) => item.status === 'pending');

  return (
    orders && (
      <main className={styles.feed__main}>
        <p className="text text_type_main-large">Лента заказов</p>
        <div className={styles.feed__container}>
          <OrderList orders={orders} isFeedList={false} />
          <OrderCounters
            ordersDone={ordersDone}
            ordersCreated={ordersCreated}
            total={total}
            totalToday={totalToday}
          />
        </div>
      </main>
    )
  );
};
