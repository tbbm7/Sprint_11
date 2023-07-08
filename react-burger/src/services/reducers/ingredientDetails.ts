import {
  CURRENT_INGREDIENT
} from "../actions/ingredientDetails";

import {
  TCurrenIngredientAction,
  ICurrentIngredientInitialState,
} from "../types/data";


export const initialState: ICurrentIngredientInitialState = {
  currentIngredient: undefined,
};

export const currentIngredientReducer = (state = initialState, action: TCurrenIngredientAction
): ICurrentIngredientInitialState => {
  switch (action.type) {
    case CURRENT_INGREDIENT:
      return { ...state, currentIngredient: action.payload };
    default:
      return state;
  }
}