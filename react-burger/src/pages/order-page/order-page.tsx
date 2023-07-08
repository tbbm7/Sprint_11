import { useParams } from 'react-router-dom';
import { FeedPageDetails } from '../../components/Modals/FeedPageDetails/FeedPageDetails';
import { IIngredient } from '../../services/types/data';
import { IOrder } from '../../services/types/data';
import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import { WS_URL_ALL, BASE_WS_URL } from '../../utils/variables';
import { getCookie } from '../../utils/cookie';

import {
  wsConnectionStartOrdersAction,
  wsConnectionClosedOrdersAction,
} from '../../services/actions/wsAction';

export const OrderPage = (isProfilePage: any): JSX.Element | any => {
  const dispatch = useDispatch();
  console.log(isProfilePage.isProfilePage)

  const WS_URL_PROFILE = `${BASE_WS_URL}?token=${getCookie('accessToken')}`;

  useEffect(() => {
    isProfilePage.isProfilePage
      ? dispatch(wsConnectionStartOrdersAction(WS_URL_PROFILE))
      : dispatch(wsConnectionStartOrdersAction(WS_URL_ALL));
    return () => {
      dispatch(wsConnectionClosedOrdersAction());
    };
  }, [dispatch]);

  const ingredients = useSelector((store) => store.ingredientList.ingredients);

  const { orders } = useSelector((store) => store.wsReducer);

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
          <FeedPageDetails />
        </div>
      </>
    )
  );
};
