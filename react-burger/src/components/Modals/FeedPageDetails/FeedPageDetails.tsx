import { FC } from 'react';
import style from './FeedPageDetails.module.css';
import { useSelector } from '../../../services/hooks';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useParams } from 'react-router-dom';
import { IIngredient } from '../../../services/types/data';
import { IOrder } from '../../../services/types/data';
import { useMemo } from 'react';

export const FeedPageDetails: FC | any = () => {
  const { orders } = useSelector((store) => store.wsReducer);
  const { id } = useParams();
  const order: IOrder | undefined = orders.find((item) => item._id === id);

  const curOffset = new Date().getTimezoneOffset() / 60;
  const GMT = 'i-GTM' + (curOffset > 0 ? '-' + curOffset : '+' + -curOffset);
  const ingredients = useSelector((store) => store.ingredientList.ingredients);

  const orderIngredients: Array<IIngredient> | any =
    ingredients &&
    order &&
    order?.ingredients.map(
      (item) => ingredients?.filter((allIngredientItem) => allIngredientItem._id === item)[0],
    );

  const orderIngredientsFiltered: Array<IIngredient> | any =
    ingredients && ingredients.filter((item) => order?.ingredients.includes(item._id));

  const totalPrice = useMemo(
    () =>
      orderIngredients
        ? orderIngredients.reduce((sum: any, current: any) => sum + (current?.price || 0), 0)
        : 0,
    [orderIngredients],
  );

  return (
    order && (
      <div className={style.feed_page__container}>
        <p className={`text text_type_digits-default ${style.feed_page__title}`}>
          {`#${order.number}`}
        </p>
        <p className={`text text_type_main-medium ${style.feed_page__name}`}>{order.name}</p>
        <p className="text text_type_main-medium pt-15">Состав:</p>
        <div className={`text text_type_main-medium ${style.feed_page__list}`}>
          {orderIngredientsFiltered.map((ingredient: IIngredient) => {
            return (
              <div className={style.feed_element}>
                <div className={style.feed_element__image}>
                  <img
                    className={style.feed__image}
                    src={ingredient.image_mobile}
                    alt={ingredient.name}
                  />
                </div>
                <div className={style.feed_element__burger_detail}>
                  <p className="text text_type_main-default">{ingredient.name}</p>
                  <div className={style.feed_element__counter}>
                    {ingredient.type === 'bun' && (
                      <p className={'text text_type_digits-default'}>2 x {ingredient.price}</p>
                    )}
                    {ingredient.type !== 'bun' && (
                      <p className="text text_type_digits-default">1 x {ingredient.price}</p>
                    )}
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.feed_element__total}>
          <p
            className={`text text_type_main-default text_color_inactive ${style.feed_element__time}`}>
            {order && <FormattedDate date={new Date(order.createdAt)} />}
            {` ${GMT}`}
          </p>
          <div className={style.feed_element__price}>
            <p className="text text_type_digits-default">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    )
  );
};
