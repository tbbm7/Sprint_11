import { constructorReducer, initialState } from './constructor';
import { ingredients, ingredients1, UUID1, UUID2 } from '../../utils/fake_data';
import * as types from '../actions/constructor'

describe('Тестируем редьюсер конструктора', () => {
    it('should return the initial state', () => {
        //@ts-ignore
        expect(constructorReducer(undefined, {})).toEqual(initialState)
    })
    it("Добавление булки в заказ", () => {
        //@ts-ignore
        expect(constructorReducer(undefined, {
            type: types.ADD_INGREDIENT,
            payload: ingredients1[0],
            number: UUID1
        })).toEqual({
            fillings: [],
            bun: ingredients1[0].ingridientElement,
        })
    });
    it("Добавление начинки в заказ", () => {
        //@ts-ignore
        expect(constructorReducer({
            fillings: [],
            bun: ingredients1[0].ingridientElement
        }, {
            type: types.ADD_INGREDIENT,
            payload: ingredients[2],
            number: UUID1
        })).toEqual({
            bun: ingredients1[0].ingridientElement,
            fillings: [ingredients1[2].ingridientElement],
        })
    });
    it("перестановка ингридиентов", () => {
        expect(constructorReducer({
            fillings: [ingredients1[2].ingridientElement, ingredients1[3].ingridientElement],
            bun: ingredients1[0].ingridientElement
        }, {
            type: types.REORDER_INGREDIENT,
            payload: [0, 1]
        })).toEqual({
            fillings: [ingredients1[3].ingridientElement, ingredients1[2].ingridientElement],
            bun: ingredients1[0].ingridientElement
        })
    });
    it("удаление ингридиента", () => {
        expect(constructorReducer({
            fillings: [ingredients1[2].ingridientElement, ingredients1[3].ingridientElement],
            bun: ingredients1[0].ingridientElement
        }, {
            type: types.DELETE_INGREDIENT,
            payload: UUID1
        })).toEqual({
            bun: ingredients1[0].ingridientElement,
            fillings: [ingredients1[3].ingridientElement]
        })
    });
    it("очистка списка", () => {
        expect(constructorReducer(initialState, {
            type: types.RESET_INGREDIENTS
        })).toEqual({
            bun: null,
            fillings: [],
            number: null
        })
    });
});