import { orderApi } from '../../utils/ingredientsApi';
import { IIngredient, IIngredients, IResetOrder } from "../types/data";
import { AppDispatch } from "../types";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const RESET_ORDER = 'RESET_ORDER';


export const resetOrder = (): IResetOrder => {
  return {
    type: RESET_ORDER,
  };
};

export function createOrder(ingredients: IIngredients) {
  return function (dispatch: AppDispatch) {
    const ingredientsOrderList = [
      ingredients.bun._id,
      ...ingredients.fillings.map((filling: IIngredient) => filling._id),
      ingredients.bun._id,
    ];
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    orderApi(ingredientsOrderList)
      .then((res) => {
        console.log('res', res)
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
