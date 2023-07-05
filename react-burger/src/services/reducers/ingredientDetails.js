import {
    CURRENT_INGREDIENT
  } from "../actions/ingredientDetails.js";
  
  const initialState = {
    currentIngredient: null,
  };


export  const currentIngredientReducer = (state = initialState, action) => {
    switch(action.type){
        case CURRENT_INGREDIENT:
            return { ...state, currentIngredient: action.payload };
      default:
        return state;
    }
  }