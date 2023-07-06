﻿import { IOrder, TFeedOrdersActions } from '../../services/types/data';
import {
  WS_CONNECTION_SUCCESS_ORDERS,
  WS_CONNECTION_CLOSED_ORDERS,
  WS_CONNECTION_ERROR_ORDERS,
  WS_GET_ORDERS,
  WS_CONNECTION_SUCCESS_ORDERS_USER,
  WS_CONNECTION_CLOSED_ORDERS_USER,
  WS_CONNECTION_ERROR_ORDERS_USER,
  WS_GET_ORDERS_USER,
} from '../components/index';

type TFeedOrdersState = {
  wsConnected: boolean;
  orders: IOrder[];
  total: number;
  totalToday: number;
  userOrders: IOrder[];
};

export const feedOrdersInitialState: TFeedOrdersState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
  userOrders: [],
};

export const wsReducer = (
  state = feedOrdersInitialState,
  action: TFeedOrdersActions,
): TFeedOrdersState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS_ORDERS: {
      return {
        ...state,
        wsConnected: true,
      };
    }
    case WS_CONNECTION_CLOSED_ORDERS: {
      return {
        ...state,
        wsConnected: false,
      };
    }
    case WS_CONNECTION_ERROR_ORDERS: {
      return {
        ...state,
        wsConnected: false,
      };
    }
    case WS_GET_ORDERS: {
      return {
        ...state,
        orders: action.orders.orders,
        total: action.orders.total,
        totalToday: action.orders.totalToday,
      };
    }
    case WS_CONNECTION_SUCCESS_ORDERS_USER: {
      return {
        ...state,
        wsConnected: true,
      };
    }
    case WS_CONNECTION_CLOSED_ORDERS_USER: {
      return {
        ...state,
        wsConnected: false,
      };
    }
    case WS_CONNECTION_ERROR_ORDERS_USER: {
      return {
        ...state,
        wsConnected: false,
      };
    }
    case WS_GET_ORDERS_USER: {
      return {
        ...state,
        userOrders: action.orders.orders,
      };
    }
    default: {
      return state;
    }
  }
};
