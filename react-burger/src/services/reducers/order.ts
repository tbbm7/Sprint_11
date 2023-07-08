import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  RESET_ORDER,
} from '../actions/order';

import { IOrderInitialState, TOrderAction } from "../types/data";

const initialState : IOrderInitialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};

const currentOrderReducer = (state = initialState, action: TOrderAction
  ): IOrderInitialState => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        orderRequest: true,
      };
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderFailed: false,
        order: action.order,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }
    case RESET_ORDER: {
      return {
        ...state,
        order: undefined
      };
    }
    default:
      return state;
  }
};

export {currentOrderReducer, initialState};