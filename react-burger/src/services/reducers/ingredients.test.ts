import { ingredientsReducer, initialState } from './ingredients';
import { ingredientsApiList } from '../../utils/fake_data';
import * as types from '../actions/ingredients'

describe('Тестируем редьюсер ингредиентов', () => {
    it('should return the initial state', () => {
        //@ts-ignore
        expect(ingredientsReducer(undefined, {})).toEqual(initialState)
    })
    it("выполнение запроса GET_INGREDIENTS_REQUEST", () => {
        //@ts-ignore
        expect(ingredientsReducer(initialState, {
            type: types.GET_INGREDIENTS_REQUEST
        })).toEqual({
            ingredientsRequest: true
        })
    });
    it("Получение списка игридиентов GET_INGREDIENTS_SUCCESS", () => {
        //@ts-ignore
        expect(ingredientsReducer(
            {
                ingredients: [],
                ingredientsRequest: true,
                ingredientsFailed: false,
                error: null
            }
            , {
                type: types.GET_INGREDIENTS_SUCCESS,
                ingredients: ingredientsApiList
            })).toEqual({
                ingredients: ingredientsApiList,
                ingredientsRequest: false,
                ingredientsFailed: false,
                error: null
            })
    });
    it("Ошибка запроса ингредиентов GET_INGREDIENTS_FAILED", () => {
        //@ts-ignore
        expect(ingredientsReducer(initialState, {
            type: types.GET_INGREDIENTS_FAILED
        })).toEqual({
            ...initialState,
            ingredientsFailed: true,
            ingredientsRequest: false,
            error: undefined
        })
    });
});
