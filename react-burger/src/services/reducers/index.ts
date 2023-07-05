
 import { combineReducers } from 'redux';
 import ingredientsReducer from './ingredients';
 import constructorReducer from './constructor'
 import {currentOrderReducer} from './order'
 import {currentIngredientReducer} from './ingredientDetails'
 import {userReducer} from './userForm'


 const rootReducer = combineReducers({
  userReducer: userReducer,
  ingredientList: ingredientsReducer,
  constructorList: constructorReducer,
  orderList: currentOrderReducer,
  ingredientDetail: currentIngredientReducer
})


export default rootReducer