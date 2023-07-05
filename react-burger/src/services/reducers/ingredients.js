import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
} from '../actions/ingredients';

const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    error: null
};

const ingredientsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_INGREDIENTS_REQUEST:
            return {
                ingredientsRequest: true
            }
        case GET_INGREDIENTS_SUCCESS: {
            return { 
                ...state, 
                ingredientsFailed: false, 
                ingredients: action.ingredients, 
                ingredientsRequest: false 
                };
            }
        case GET_INGREDIENTS_FAILED: {
        return { 
            ...state, 
            ingredientsFailed: true, 
            ingredientsRequest: false,
            error: action.error
            };
        }
        default:
            return state
    }
}

  

export default ingredientsReducer