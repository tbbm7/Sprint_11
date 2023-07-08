import { userReducer, initialState } from './userForm';
import * as types from '../actions/userForm'

describe('Тестируем редьюсер ингридиентов', () => {
    it('should return the initial state', () => {
        //@ts-ignore
        expect(userReducer(undefined, {})).toEqual(initialState)
    })
    it("выполнение запроса USER_REGISTER_FORM_SUBMIT", () => {
        //@ts-ignore
        expect(userReducer(initialState, {
            type: types.USER_REGISTER_FORM_SUBMIT
        })).toEqual({
            ...initialState,
            registrationSubmit: true
        })
    });
    it("выполнение запроса USER_REGISTER_FORM_SUBMIT_SUCCESS", () => {
        //@ts-ignore
        expect(userReducer(initialState, {
            type: types.USER_REGISTER_FORM_SUBMIT_SUCCESS
        })).toEqual({
            ...initialState,

        })
    });
    it("выполнение запроса USER_REGISTER_FORM_SUBMIT_FAILED", () => {
        //@ts-ignore
        expect(userReducer(initialState, {
            type: types.USER_REGISTER_FORM_SUBMIT_FAILED
        })).toEqual({
            ...initialState,
            registrationFailed: true,
        })
    });
    it("выполнение запроса USER_LOGIN_FORM_SUBMIT", () => {
        //@ts-ignore
        expect(userReducer(initialState, {
            type: types.USER_LOGIN_FORM_SUBMIT
        })).toEqual({
            ...initialState,
            loginSubmit: true
        })
    });
    it("выполнение запроса USER_LOGIN_FORM_SUBMIT_SUCCESS", () => {
        //@ts-ignore
        expect(userReducer({
            user: {
                email: 'tbbm7@yandex.tu',
                name: 'PA',
            },
            loginForm: { email: '', password: '' },
            isAuth: false,
        }, {
            type: types.USER_LOGIN_FORM_SUBMIT_SUCCESS,
            payload: { email: 'tbbm7@yandex.tu', name: 'PA' }
        })).toEqual({
            user: {
                email: 'tbbm7@yandex.tu',
                name: 'PA',
            },
            isAuth: true,
            loginForm: { email: '', password: '' }
        })
    });
    it("выполнение запроса USER_LOGIN_FORM_SUBMIT_FAILED", () => {
        //@ts-ignore
        expect(userReducer(initialState, {
            type: types.USER_LOGIN_FORM_SUBMIT_FAILED
        })).toEqual({
            ...initialState,
            loginSubmit: false,
            loginFailed: true,
        })
    });
    it("выполнение запроса USER_ACCESS_ALLOWED", () => {
        //@ts-ignore
        expect(userReducer({
            user: {
                email: '',
                name: '',
            },
            isAuth: false,
        }, {
            type: types.USER_ACCESS_ALLOWED,
            payload: { email: 'tbbm7@yandex.tu', name: 'PA' }
        })).toEqual({
            user: {
                email: 'tbbm7@yandex.tu',
                name: 'PA',
            },
            isAuth: true,
        })
    });
    it("выполнение запроса USER_ACCESS_DENIED", () => {
        //@ts-ignore
        expect(userReducer({
            user: {
                email: '',
                name: '',
            },
            isAuth: false,
        }, {
            type: types.USER_ACCESS_DENIED,
            payload: { email: 'tbbm7@yandex.tu', name: 'PA' }
        })).toEqual({
            user: {
                email: '',
                name: '',
            },
            isAuth: false,
        })
    });
    it("выполнение запроса CHANGE_USER_DATA_FORM_SUBMIT", () => {
        //@ts-ignore
        expect(userReducer(initialState, {
            type: types.CHANGE_USER_DATA_FORM_SUBMIT
        })).toEqual({
            ...initialState,
            changeUserDataSubmit: true,
        })
    });
    it("выполнение запроса CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS", () => {
        //@ts-ignore
        expect(userReducer({
            user: {
                email: 'tbbm7@yandex.tu',
                name: 'PA',
            }
        }, {
            type: types.CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS,
            payload: { email: 'test_user@mail.ru', name: 'User' }
        })).toEqual({
            user: {
                email: 'test_user@mail.ru',
                name: 'User',
            }
        })
    });
    it("выполнение запроса CHANGE_USER_DATA_FORM_SUBMIT_FAILED", () => {
        //@ts-ignore
        expect(userReducer(initialState, {
            type: types.CHANGE_USER_DATA_FORM_SUBMIT_FAILED
        })).toEqual({
            ...initialState,
            changeUserDataSubmit: false,
            changeUserDataFailed: true,
        })
    });
    it("выполнение запроса FORGOT_PASSWORD_FORM_SUBMIT", () => {
        //@ts-ignore
        expect(userReducer(initialState, {
            type: types.FORGOT_PASSWORD_FORM_SUBMIT
        })).toEqual({
            ...initialState,
            forgotPasswordSubmit: true,
        })
    });
    it("выполнение запроса FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS", () => {
        //@ts-ignore
        expect(userReducer({
            forgotPasswordForm: {
                email: "",
            },
            resetEmailSent: true,
        }, {
            type: types.FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
            payload: { email: 'test_user@mail.ru', name: 'User' }
        })).toEqual({
            forgotPasswordForm: {
                email: ''
            },
            resetEmailSent: true,
        })
    });
    it("выполнение запроса FORGOT_PASSWORD_FORM_SUBMIT_FAILED", () => {
        //@ts-ignore
        expect(userReducer(initialState, {
            type: types.FORGOT_PASSWORD_FORM_SUBMIT_FAILED
        })).toEqual({
            ...initialState,
            forgotPasswordSubmit: false,
            forgotPasswordFailed: true,
        })
    });
    it("выполнение запроса RESET_PASSWORD_FORM_SUBMIT", () => {
        //@ts-ignore
        expect(userReducer(initialState, {
            type: types.RESET_PASSWORD_FORM_SUBMIT
        })).toEqual({
            ...initialState,
            resetPasswordSubmit: true,
        })
    });
    it("выполнение запроса RESET_PASSWORD_FORM_SUBMIT_SUCCESS", () => {
        //@ts-ignore
        expect(userReducer({
            resetPasswordSubmit: true,
        }, {
            type: types.RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
        })).toEqual({
            resetPasswordForm: {
                password: '',
                token: '',
            },
            resetEmailSent: false,
            resetPasswordSubmit: true,
        })
    });
    it("выполнение запроса RESET_PASSWORD_FORM_SUBMIT_FAILED", () => {
        //@ts-ignore
        expect(userReducer(initialState, {
            type: types.RESET_PASSWORD_FORM_SUBMIT_FAILED
        })).toEqual({
            ...initialState,
            resetPasswordSubmit: false,
            resetPasswordFailed: true,
        })
    });
})
