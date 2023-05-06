import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  RESET_ORDER,
} from '../actions/order';

const initialState = {
  order: [],
  orderRequest: false,
  orderFailed: false,
};

export const currentOrderReducer = (state = initialState, action) => {
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
        order: []
      };
    }
    default:
      return state;
  }
};
