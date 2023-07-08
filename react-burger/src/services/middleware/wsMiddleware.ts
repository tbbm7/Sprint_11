import { Middleware, MiddlewareAPI } from 'redux';
import {
  TWsOrdersActions
} from '../actions/wsAction';
import { AppDispatch, RootState } from '../types';

const wsMiddleware = (wsActions: TWsOrdersActions): Middleware => (
  store: MiddlewareAPI<AppDispatch, RootState>,
) => {
  let socket: WebSocket | null = null;

  return (next) => (action) => {
    const { dispatch } = store;
    const { type, payload } = action;
    const { wsInit, onOpen, onClose, onError, onOrders } = wsActions;

    if (type === wsInit) {
      const wsUrl = payload;
      socket = new WebSocket(wsUrl);
    }

    if (socket) {
      socket.onopen = (event) => {
        dispatch({ type: onOpen, orders: event });
      };

      socket.onerror = (event) => {
        dispatch({ type: onError, error: event });
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