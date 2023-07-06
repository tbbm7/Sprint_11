import {
    ADD_INGREDIENT,
    REORDER_INGREDIENT,
    DELETE_INGREDIENT,
    RESET_INGREDIENTS,

    CURRENT_INGREDIENT,

    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,

    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
    RESET_ORDER,


    USER_REGISTER_FORM_SUBMIT,
    USER_REGISTER_FORM_SUBMIT_SUCCESS,
    USER_REGISTER_FORM_SUBMIT_FAILED,

    USER_LOGIN_FORM_SUBMIT,
    USER_LOGIN_FORM_SUBMIT_SUCCESS,
    USER_LOGIN_FORM_SUBMIT_FAILED,

    USER_ACCESS_ALLOWED,
    USER_ACCESS_DENIED,

    FORGOT_PASSWORD_FORM_SUBMIT,
    FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
    FORGOT_PASSWORD_FORM_SUBMIT_FAILED,

    RESET_PASSWORD_FORM_SUBMIT,
    RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
    RESET_PASSWORD_FORM_SUBMIT_FAILED,

    CHANGE_USER_DATA_FORM_SUBMIT,
    CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS,
    CHANGE_USER_DATA_FORM_SUBMIT_FAILED,

    WS_CONNECTION_SUCCESS_ORDERS,
    WS_CONNECTION_CLOSED_ORDERS,
    WS_CONNECTION_ERROR_ORDERS,
    WS_GET_ORDERS,
    WS_CONNECTION_SUCCESS_ORDERS_USER,
    WS_CONNECTION_CLOSED_ORDERS_USER,
    WS_CONNECTION_ERROR_ORDERS_USER,
    WS_GET_ORDERS_USER,
    WS_CONNECTION_START_ORDERS_USER,
    WS_CONNECTION_START_ORDERS

} from "../../services/components/";
import { ReactNode } from "react";


export interface IIngredient {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
    ingredientUniqId?: string | undefined;
    ingridientElement: IIngredient;
}

export interface IBurgerConstructorBlock {
    text: string;
    price: number;
    thumbnail: string;
    type?: any;
    isLocked: boolean;
    index?: number;
    ingredientUniqId?: string | undefined;
    id: string;
    ingredientCard?: IIngredient;
}

export interface IBurgerTotalBlock {
    ingredients: IIngredients | any;
    totalPrice: number;
}

export interface IModal {
    children?: ReactNode;
    onCloseModal?: () => void;
    isModalRoute?: boolean;
}

export interface IDoneIcon {
    className: string;
}

export interface IIngredientBlockName {
    name: string,
    value: string,
}

export interface IBurgerIngridientsBlock {
    ingredientBlockName: IIngredientBlockName;
    ingredientsArray: Array<IIngredient>;
    onClickIngredient: any;
}

export interface IIngredientCard {
    ingredient: IIngredient;
    onClickIngredient: () => void;
}

export interface IIngredients {
    bun: IIngredient;
    fillings: Array<IIngredient>;
}

export interface IIngredientDetailNutrition {
    ingredient: IIngredient;
}

export interface IRegisterUserRequest {
    readonly name: string;
    readonly email: string;
    readonly password: string;
}

export interface ILoginUserRequest {
    readonly email: string;
    readonly password: string;
}

export interface IUser {
    readonly email: string;
    readonly name: string;
}

export interface IResetPasswordRequest {
    readonly password: string;
    readonly token: string;
}

export interface IChangeUserDataRequest {
    readonly email: string;
    readonly name: string;
}

export interface IConstructorInitialState {
    readonly bun: null | IIngredient;
    readonly fillings: Array<IIngredient>;
    readonly number?: null;
}

export interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT;
    readonly number: string;
    readonly payload: IIngredient;
}

export interface IReorderIngredients {
    readonly type: typeof REORDER_INGREDIENT;
    payload: Array<number>;
}

export interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT;
    readonly payload: string;

}

export interface IResetIngredient {
    readonly type: typeof RESET_INGREDIENTS;
}

export interface IGetIngredientsRequest {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    ingredients: Array<IIngredient>;
}

export interface IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED;
    readonly error: string | null;
}

export interface IIngredientsInitialState {
    ingredients?: Array<IIngredient>,
    ingredientsRequest: boolean,
    ingredientsFailed?: boolean,
    error?: string | null;
}

export interface IOrdersInitialState {
    orders?: Array<IOrder>,
    total?: number | null,
    totalToday?: number | null,
    ordersRequest: boolean,
    ordersFailed?: boolean,
    error?: string | null;
}

export interface ICurrentIngredientInitialState {
    currentIngredient: IIngredient | undefined;
}

export interface ICurrentIngredient {
    readonly type: typeof CURRENT_INGREDIENT;
    readonly payload: IIngredient;
}

export interface IOrderList {
    orders: Array<IOrder>;
    isPageOrders: boolean | undefined;
}

export interface IOrderCounters {
    total: number | any;
    totalToday: number | any;
    ordersDone: Array<IOrder> | any;
    ordersCreated: Array<IOrder> | any;
}

export interface IOrderement {
    order: IOrder;
    isPageOrders: boolean | undefined;
}

export interface IOrderIngredientsList {
    ingredients: Array<IIngredient>;
}

export interface IOrderInitialState {
    order?: null | number;
    orderRequest: boolean;
    orderFailed?: boolean;
}

export interface IProtectedRoute {
    children: React.ReactElement;
    onlyUnAuth?: boolean;
}

export interface IGetOrderRequest {
    readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccess {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly order: number;
}

export interface IGetOrderFailed {
    readonly type: typeof GET_ORDER_FAILED;
    readonly error: string;
}

export interface IResetOrder {
    readonly type: typeof RESET_ORDER;
}


export interface IOrder {
    readonly _id: string;
    readonly ingredients: Array<string>;
    readonly status: string;
    readonly name: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly number: number;
}

export interface IWsMessage {
    readonly orders: Array<IOrder>;
    readonly total: number;
    readonly totalToday: number;
}

export interface IWsInitialState {
    wsConnected: boolean;
    orders: Array<IOrder>;
    total: number;
    totalToday: number;
    errorState: boolean;
    errorMessage: null | string;
}

export interface IWebSocket {
    wsInit: string;
    onOpen: string;
    onClose: string;
    onClosed: string;
    onError: string;
}

export interface IUserRegisterFormSubmit {
    readonly type: typeof USER_REGISTER_FORM_SUBMIT;
}

export interface IUserRegisterFormSubmitSuccess {
    readonly type: typeof USER_REGISTER_FORM_SUBMIT_SUCCESS;
}

export interface IUserRegisterFormSubmitFailed {
    readonly type: typeof USER_REGISTER_FORM_SUBMIT_FAILED;
}


export interface IUserLoginFormSubmit {
    readonly type: typeof USER_LOGIN_FORM_SUBMIT;
}

export interface IUserLoginFormSubmitSuccess {
    readonly type: typeof USER_LOGIN_FORM_SUBMIT_SUCCESS;
    readonly payload: IUser;
}

export interface IUserLoginFormSubmitFailed {
    readonly type: typeof USER_LOGIN_FORM_SUBMIT_FAILED;
}

export interface IUserAccessDenied {
    readonly type: typeof USER_ACCESS_DENIED;
}

export interface IUserAccessAllowed {
    readonly type: typeof USER_ACCESS_ALLOWED;
    readonly payload: IUser;
}

export interface IForgotPasswordFormSubmit {
    readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT;
}

export interface IForgotPasswordFormSubmitSuccess {
    readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS;
}

export interface IForgotPasswordFormSubmitFailed {
    readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_FAILED;
}

export interface IResetPasswordFormSubmit {
    readonly type: typeof RESET_PASSWORD_FORM_SUBMIT;
}

export interface IResetPasswordFormSubmitSuccess {
    readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_SUCCESS;
}

export interface IResetPasswordFormSubmitFailed {
    readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_FAILED;
}

export interface IChangeUserDataFormSubmit {
    readonly type: typeof CHANGE_USER_DATA_FORM_SUBMIT;
}

export interface IChangeUserDataFormSubmitSuccess {
    readonly type: typeof CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS;
    readonly payload: IUser;
}

export interface IChangeUserDataFormSubmitFailed {
    readonly type: typeof CHANGE_USER_DATA_FORM_SUBMIT_FAILED;
}

export interface IWsConnectionStartOrdersAction {
    readonly type: typeof WS_CONNECTION_START_ORDERS;
}

export interface IWsConnectionSuccessOrdersAction {
    readonly type: typeof WS_CONNECTION_SUCCESS_ORDERS;
}

export interface IWsConnectionErrorOrdersAction {
    readonly type: typeof WS_CONNECTION_ERROR_ORDERS;
    readonly error: string | any ;
}

export interface IWsConnectionClosedOrdersAction {
    readonly type: typeof WS_CONNECTION_CLOSED_ORDERS;
}

export interface IWsGetOrdersAction {
    readonly type: typeof WS_GET_ORDERS;
    readonly orders: TOrders;
}

export interface IWsConnectionStartOrdersUserAction {
    readonly type: typeof WS_CONNECTION_START_ORDERS_USER;
}

export interface IWsConnectionSuccessOrdersUserAction {
    readonly type: typeof WS_CONNECTION_SUCCESS_ORDERS_USER;
}

export interface IWsConnectionErrorOrdersUserAction {
    readonly type: typeof WS_CONNECTION_ERROR_ORDERS_USER;
}

export interface IWsConnectionClosedOrdersUserAction {
    readonly type: typeof WS_CONNECTION_CLOSED_ORDERS_USER;
}

export interface IWsGetOrdersUserAction {
    readonly type: typeof WS_GET_ORDERS_USER;
    readonly orders: TOrders;
}

export interface IUserInitialState {
    registerForm: IRegisterUserRequest;
    loginForm: ILoginUserRequest;
    user: IUser;
    forgotPasswordForm: {
        email: string;
    };
    resetPasswordForm: IResetPasswordRequest;
    isAuth: undefined | boolean;
    registrationSubmit: boolean;
    registrationFailed: boolean;
    loginSubmit: boolean;
    loginFailed: boolean;
    forgotPasswordSubmit: boolean;
    forgotPasswordFailed: boolean;
    resetEmailSent: boolean;
    resetPasswordSubmit: boolean;
    resetPasswordFailed: boolean;
    changeUserDataSubmit: boolean;
    changeUserDataFailed: boolean;
}

export type TOrders = {
    orders: Array<IOrder>;
    total: number;
    totalToday: number;
}

export type TConstructorAction =
    | IAddIngredient
    | IReorderIngredients
    | IDeleteIngredient
    | IResetIngredient;

export type TOrderAction =
    | IGetOrderRequest
    | IGetOrderSuccess
    | IGetOrderFailed
    | IResetOrder;

export type TIngredientsAction =
    | IGetIngredientsRequest
    | IGetIngredientsSuccess
    | IGetIngredientsFailed;

export type TCurrenIngredientAction =
    | ICurrentIngredient;

export type TUserActions =
    | IUserRegisterFormSubmit
    | IUserRegisterFormSubmitSuccess
    | IUserRegisterFormSubmitFailed
    | IUserLoginFormSubmit
    | IUserLoginFormSubmitSuccess
    | IUserLoginFormSubmitFailed
    | IUserAccessDenied
    | IUserAccessAllowed
    | IForgotPasswordFormSubmit
    | IForgotPasswordFormSubmitSuccess
    | IForgotPasswordFormSubmitFailed
    | IResetPasswordFormSubmit
    | IResetPasswordFormSubmitSuccess
    | IResetPasswordFormSubmitFailed
    | IChangeUserDataFormSubmit
    | IChangeUserDataFormSubmitSuccess
    | IChangeUserDataFormSubmitFailed;

export type TFeedOrdersActions =
    | IWsConnectionStartOrdersAction
    | IWsConnectionSuccessOrdersAction
    | IWsConnectionErrorOrdersAction
    | IWsConnectionClosedOrdersAction
    | IWsGetOrdersAction
    | IWsConnectionStartOrdersUserAction
    | IWsConnectionSuccessOrdersUserAction
    | IWsConnectionErrorOrdersUserAction
    | IWsConnectionClosedOrdersUserAction
    | IWsGetOrdersUserAction;