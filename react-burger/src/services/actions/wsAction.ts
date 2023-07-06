import { TOrders } from '../../services/types/data';

import {
  WS_CONNECTION_START_ORDERS,
  WS_CONNECTION_SUCCESS_ORDERS,
  WS_CONNECTION_ERROR_ORDERS,
  WS_CONNECTION_CLOSED_ORDERS,
  WS_GET_ORDERS
} from "../components/index";


export interface IWsConnectionStartOrdersAction {
  readonly type: typeof WS_CONNECTION_START_ORDERS;
  readonly payload: string;
}

export interface IWsConnectionSuccessOrdersAction {
  readonly type: typeof WS_CONNECTION_SUCCESS_ORDERS;
}

export interface IWsConnectionErrorOrdersAction {
  readonly type: typeof WS_CONNECTION_ERROR_ORDERS;
}

export interface IWsConnectionClosedOrdersAction {
  readonly type: typeof WS_CONNECTION_CLOSED_ORDERS;
}

export interface IWsGetOrdersAction {
  readonly type: typeof WS_GET_ORDERS;
  readonly orders: TOrders;
}


export type TFeedOrdersActions =
  | IWsConnectionStartOrdersAction
  | IWsConnectionSuccessOrdersAction
  | IWsConnectionErrorOrdersAction
  | IWsConnectionClosedOrdersAction
  | IWsGetOrdersAction

export const wsConnectionStartOrdersAction = (url: string): IWsConnectionStartOrdersAction => ({
  type: WS_CONNECTION_START_ORDERS,
  payload: url,
});

export const wsConnectionSuccessOrdersAction = (): IWsConnectionSuccessOrdersAction => ({
  type: WS_CONNECTION_SUCCESS_ORDERS,
});

export const wsConnectionErrorOrdersAction = (): IWsConnectionErrorOrdersAction => ({
  type: WS_CONNECTION_ERROR_ORDERS
});

export const wsConnectionClosedOrdersAction = (): IWsConnectionClosedOrdersAction => ({
  type: WS_CONNECTION_CLOSED_ORDERS,
});

export const wsGetOrdersAction = (orders: TOrders): IWsGetOrdersAction => ({
  type: WS_GET_ORDERS,
  orders,
});

export type TWsOrdersActions = {
  wsInit: typeof WS_CONNECTION_START_ORDERS;
  onOpen: typeof WS_CONNECTION_SUCCESS_ORDERS;
  onClose: typeof WS_CONNECTION_CLOSED_ORDERS;
  onError: typeof WS_CONNECTION_ERROR_ORDERS;
  onOrders: typeof WS_GET_ORDERS;
};

export const wsOrdersActions: TWsOrdersActions = {
  wsInit: WS_CONNECTION_START_ORDERS,
  onOpen: WS_CONNECTION_SUCCESS_ORDERS,
  onClose: WS_CONNECTION_CLOSED_ORDERS,
  onError: WS_CONNECTION_ERROR_ORDERS,
  onOrders: WS_GET_ORDERS,
};

