import { currentOrderReducer, initialState } from './order';
import * as types from '../actions/order'

describe('Тестируем редьюсер отправки заказа', () => {
    it('should return the initial state', () => {
        //@ts-ignore
        expect(currentOrderReducer(undefined, {})).toEqual(initialState)
    })
    it("выполнение запроса GET_ORDER_REQUEST", () => {
        //@ts-ignore
        expect(currentOrderReducer(initialState, {
            type: types.GET_ORDER_REQUEST
        })).toEqual({
            orderRequest: true
        })
    });
    it("Получение списка заказов GET_ORDER_SUCCESS", () => {
        //@ts-ignore
        expect(currentOrderReducer({
            order: null,
            orderFailed: false,
            orderRequest: true,
        }, {
            type: types.GET_ORDER_SUCCESS,
            order: 45346
        })).toEqual({
            order: 45346,
            orderFailed: false,
            orderRequest: false,
        })
    });
    it("Ошибка запроса списка заказов GET_ORDER_FAILED", () => {
        //@ts-ignore
        expect(currentOrderReducer(initialState, {
            type: types.GET_ORDER_FAILED
        })).toEqual({
            ...initialState,
            orderFailed: true,
            orderRequest: false,
        })
    });
    it("сброс номера заказа RESET_ORDER", () => {
        //@ts-ignore
        expect(currentOrderReducer(initialState, {
            type: types.RESET_ORDER
        })).toEqual({
            ...initialState,
            order: undefined
        })
    });
});