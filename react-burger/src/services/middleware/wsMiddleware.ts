import { Middleware, MiddlewareAPI } from 'redux';
import { getCookie } from '../../utils/cookie';
import {
  TWsOrdersActions,
  TWsOrdersUserActions,
} from '../actions/wsAction';

import { WS_CONNECTION_START_ORDERS,
  WS_CONNECTION_START_ORDERS_USER} from '../components/index'
import { AppDispatch, RootState } from '../types';

const wsMiddleware = (wsUrl: string, wsActions: TWsOrdersActions | TWsOrdersUserActions): Middleware => (
  store: MiddlewareAPI<AppDispatch, RootState>,
) => {
  let socket: WebSocket | null = null;
  
  return (next) => (action) => {
    const { dispatch, getState } = store;
    const { isAuth } = getState().userReducer;
    const token = isAuth ? `?token=${getCookie('accessToken')}` : ''

    const { type } = action;
    const { wsInit, onOpen, onClose, onError, onOrders } = wsActions;

    if (type === wsInit && type === WS_CONNECTION_START_ORDERS_USER) {
      socket = new WebSocket(`${wsUrl}${token}`);
    }

    if (type === wsInit && type === WS_CONNECTION_START_ORDERS) {
      socket = new WebSocket(`${wsUrl}/all`);
    }

    if (socket) {
      socket.onopen = (event) => {
        dispatch({ type: onOpen, orders: event });
      };

      socket.onerror = (event) => {
        dispatch({ type: onError, orders: event });
      };

      socket.onmessage = (event) => {
        const { data } = event;
        const message = JSON.parse(data);
        dispatch({ type: onOrders, orders: message });
      };

      socket.onclose = (event) => {
        dispatch({ type: onClose, orders: event });
      };
    }
    next(action);
  };
};

export default wsMiddleware;