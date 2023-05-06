
 import { combineReducers } from 'redux';
 import ingredientsReducer from './ingredients';
 import constructorReducer from './constructor'
 import {currentOrderReducer} from './order'
 import {currentIngredientReducer} from './ingredientDetails'


 const rootReducer = combineReducers({
  ingredientList: ingredientsReducer,
  constructorList: constructorReducer,
  orderList: currentOrderReducer,
  ingredientDetail: currentIngredientReducer
})


export default rootReducer