import { wsReducer, feedOrdersInitialState } from './wsReducer';
import {
    WS_CONNECTION_SUCCESS_ORDERS,
    WS_CONNECTION_CLOSED_ORDERS,
    WS_CONNECTION_ERROR_ORDERS,
    WS_GET_ORDERS
} from '../components/index';
import { order } from '../../utils/fake_data'

describe('Тестируем редьюсер вебсокета', () => {
    it('should return the initial state', () => {
        //@ts-ignore
        expect(wsReducer(undefined, {})).toEqual(feedOrdersInitialState)
    })
    it("выполнение запроса WS_CONNECTION_SUCCESS_ORDERS", () => {
        //@ts-ignore
        expect(wsReducer(feedOrdersInitialState, {
            type: WS_CONNECTION_SUCCESS_ORDERS
        })).toEqual({
            ...feedOrdersInitialState,
            wsConnected: true,
        })
    });
    it("выполнение запроса WS_CONNECTION_CLOSED_ORDERS", () => {
        //@ts-ignore
        expect(wsReducer(feedOrdersInitialState, {
            type: WS_CONNECTION_CLOSED_ORDERS
        })).toEqual({
            ...feedOrdersInitialState,
            wsConnected: false,
        })
    });
    it("выполнение запроса WS_GET_ORDERS", () => {
        //@ts-ignore
        expect(wsReducer(feedOrdersInitialState, {
            type: WS_GET_ORDERS,
            orders: order
        })).toEqual({
            ...feedOrdersInitialState,
            orders: order.orders,
            total: order.total,
            totalToday: order.totalToday,
        })
    });
    it("выполнение запроса WS_CONNECTION_ERROR_ORDERS", () => {
        //@ts-ignore
        expect(wsReducer(feedOrdersInitialState, {
            type: WS_CONNECTION_ERROR_ORDERS
        })).toEqual({
            ...feedOrdersInitialState,
            wsConnected: false,
            error: undefined
            
        })
    });
});


