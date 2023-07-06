import { useParams } from 'react-router-dom';
import { FeedPageDetails } from '../../components/Modals/FeedPageDetails/FeedPageDetails';
import { IIngredient } from '../../services/types/data';
import { IOrder } from '../../services/types/data';
import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import { v4 as uuidv4 } from 'uuid';

import {
  wsConnectionStartOrdersAction,
  wsConnectionClosedOrdersAction,
} from '../../services/actions/wsAction';

export const OrderPage = (): JSX.Element | any => {
  const ingredients = useSelector((store) => store.ingredientList.ingredients);
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.wsReducer);

  useEffect(() => {
    dispatch(wsConnectionStartOrdersAction());
    return () => {
      dispatch(wsConnectionClosedOrdersAction());
    };
  }, [dispatch]);

  const { id } = useParams<{ id: string }>();
  const order: IOrder | undefined = orders.find((item) => item._id === id);

  const orderIngredients: Array<IIngredient> | any =
    ingredients &&
    order &&
    order?.ingredients.map(
      (item) => ingredients?.filter((allIngredientItem) => allIngredientItem._id === item)[0],
    );

  function item() {
    if (orderIngredients) {
      const orderOnPage = orderIngredients.find((item: any) => item._id === id);
      return orderOnPage;
    } else return null;
  }

  const orderCard = item();

  return (
    orderCard !== null && (
      <>
        <div className={'mt-30'}>
          <FeedPageDetails key={uuidv4()} /> 
        </div>
      </>
    )
  );
};
