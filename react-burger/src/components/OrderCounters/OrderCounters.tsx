import { FC } from 'react';
import style from './OrderCounters.module.css';
import { IOrderCounters, IOrder } from '../../services/types/data';

const OrderCounters: FC<IOrderCounters> = ({ ordersDone, ordersCreated, total, totalToday }) => {
  return (
    <div className={style.counter__main}>
      <div className={style.counter__container_orders}>
        <div className={style.counter__block}>
          <p className="text text_type_main-medium">Готовы:</p>
          {ordersDone && (
            <ul className={style.counter__order_numbers}>
              {ordersDone.map((order: IOrder, index: number) => {
                return (
                  <li
                    key={index}
                    className={`text text_type_digits-default ${style.counter__order_done}`}>
                    {order.number}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className={style.counter__block}>
          <p className="text text_type_main-medium">В работе:</p>
          {ordersCreated && (
            <ul className={style.counter__order_numbers}>
              {ordersCreated.map((order: IOrder, index: number) => {
                return (
                  <li
                    key={index}
                    className={`text text_type_digits-default ${style.counter__order_created}`}>
                    {order.number}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <div className={style.counter__total}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className={`text text_type_digits-large ${style.counter__total_text}`}>{total}</p>
      </div>
      <div className={style.counter__total}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className={`text text_type_digits-large ${style.counter__total_text}`}>{totalToday}</p>
      </div>
    </div>
  );
};

export default OrderCounters;
