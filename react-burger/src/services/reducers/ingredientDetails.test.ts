import { currentIngredientReducer, initialState } from './ingredientDetails';
import { ingredientsList, } from '../../utils/fake_data';
import * as types from '../actions/ingredientDetails'

describe('Тестируем редьюсер текущего ингридиента', () => {
    it('should return the initial state', () => {
        //@ts-ignore
        expect(currentIngredientReducer(undefined, {})).toEqual(initialState)
    })
    it("вывод текущего ингредиета", () => {
        //@ts-ignore
        expect(currentIngredientReducer(initialState, {
            type: types.CURRENT_INGREDIENT,
            payload: ingredientsList[0],
        })).toEqual({
            currentIngredient: ingredientsList[0],
        })
    });
});