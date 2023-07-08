import { FC } from 'react';
import { useSelector } from '../../services/hooks';
import OrderList from '../../components/OrderList/OrderList';
import { useEffect } from 'react';
import {
  wsConnectionStartOrdersAction,
  wsConnectionClosedOrdersAction,
} from '../../services/actions/wsAction';
import { useDispatch } from '../../services/hooks';
import { BASE_WS_URL } from '../../utils/variables';
import { getCookie } from '../../utils/cookie';


export const UserOrderPage: FC = () => {
  const WS_URL_PROFILE = `${BASE_WS_URL}?token=${getCookie('accessToken')}`;

  const dispatch = useDispatch();
  const { orders, error } = useSelector((store) => store.wsReducer);

  useEffect(() => {
    dispatch(wsConnectionStartOrdersAction(WS_URL_PROFILE));
    return () => {
      dispatch(wsConnectionClosedOrdersAction());
    };
  }, []);

  return orders && <OrderList orders={orders} isPageOrders={false} />;
};
