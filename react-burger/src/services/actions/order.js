import { orderApi } from '../../utils/ingredientsApi';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const RESET_ORDER = 'RESET_ORDER';

export function createOrder(ingredients) {
  return function (dispatch) {
    const ingredientsOrderList = [
      ingredients.bun._id,
      ...ingredients.fillings.map((filling) => filling._id),
      ingredients.bun._id,
    ];
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    orderApi(ingredientsOrderList)
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: res.order.number,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
          error: err
        });
      });
  };
}
