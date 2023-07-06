import { useEffect, FC } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import OrderList from '../../components/OrderList/OrderList';

import {
  wsConnectionStartOrdersUserAction,
  wsConnectionClosedOrdersUserAction,
} from '../../services/actions/wsAction';

export const UserOrderPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStartOrdersUserAction());
    return () => {
      dispatch(wsConnectionClosedOrdersUserAction());
    };
  }, []);

  const { userOrders } = useSelector((store) => store.wsReducer);

  return userOrders && <OrderList orders={userOrders} isFeedList={true} />;
};
