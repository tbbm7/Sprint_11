import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/hooks';
import OrderIngredientsImages from '../OrderIngredientsImages/OrderIngredientsImages';
import style from './OrderListElement.module.css';
import { IOrderement } from '../../services/types/data';
import { useMemo } from 'react';

const ordersStatus: any = {
  created: 'Создан',
  pending: 'Готовится',
  done: 'Выполнен',
};

const OrderListElement: FC<IOrderement> = ({ isFeedList, order }) => {
  const curOffset = new Date().getTimezoneOffset() / 60;
  const GMT = 'i-GTM' + (curOffset > 0 ? '-' + curOffset : '+' + -curOffset);
  const location = useLocation();
  const ingredients = useSelector((store) => store.ingredientList.ingredients);

  const orderIngredients =
    ingredients &&
    order?.ingredients.map(
      (item) => ingredients?.filter((allIngredientItem) => allIngredientItem._id === item)[0],
    );

  const totalPrice = useMemo(
    () =>
      orderIngredients
        ? orderIngredients.reduce((sum, current) => sum + (current?.price || 0), 0)
        : 0,
    [orderIngredients],
  );

  return (
    <div className={style.feed_element__container}>
      <Link
        className={`text_color_primary ${style.feed_element__link}`}
        to={`/feed/${order._id}`}
        state={{ locationFeed: location }}>
        <div className={style.feed_element__order}>
          <p className="text text_type_digits-default">{`#${order.number}`}</p>
          <p className="text text_type_main-default text_color_inactive">
            <FormattedDate date={new Date(order.createdAt)} /> {`${GMT}`}
          </p>
        </div>
        <div className={style.feed_element__burger}>
          <p className={`text text_type_main-medium ${style.feed_element__name}`}>{order.name}</p>
        </div>
        <p
          className={`text  text_type_main-small ${style.feed_order__status} ${
            order.status === 'done' && style.feed_status__done
          }`}>
          {ordersStatus[order.status]}
        </p>
        <div className={style.feed_element__ingredients}>
          {orderIngredients && <OrderIngredientsImages ingredients={orderIngredients} />}
          <div className={style.feed_element__price}>
            <CurrencyIcon type="primary" />
            <p className="text text_type_digits-default">{totalPrice}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OrderListElement;
