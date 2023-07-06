import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    REORDER_INGREDIENT,
    RESET_INGREDIENTS,
  } from '../actions/constructor';
  import { TConstructorAction, IConstructorInitialState } from "../types/data";
  
  const initialState : IConstructorInitialState = {
    bun: null,
    fillings: [],
    number: [],
  };
  
  const constructorReducer = (state = initialState, action: TConstructorAction
    ): IConstructorInitialState => {
    switch (action.type) {
      case ADD_INGREDIENT:
        if (action.payload.ingridientElement.type === 'bun') {
          return {
            fillings: [...state.fillings],
            bun: action.payload.ingridientElement,
          };
        }
        return {
          ...state,
          fillings: [
            ...state.fillings,
            { ingredientUniqId: action.number, ...action.payload.ingridientElement },
          ],
        };
      case DELETE_INGREDIENT:
        return {
          ...state,
          fillings: state.fillings.filter((item) => item.ingredientUniqId !== action.payload),
        };
      case REORDER_INGREDIENT:
        const [a, b] = action.payload;
        [state.fillings[a], state.fillings[b]] = [state.fillings[b], state.fillings[a]];
        return {
          ...state,
        };
      case RESET_INGREDIENTS:
        return {
          ...state,
          bun: null,
          fillings: [],
        };
      default:
        return state;
    }
  };
  
  export default constructorReducer;
  