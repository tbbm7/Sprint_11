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
    CHANGE_USER_DATA_FORM_SUBMIT_FAILED
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
}

export interface IDoneIcon {
    className: string;
}

interface IIngredientBlockName {
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
    onClickIngredient: any;
}

export interface IIngredients {
    bun: IIngredient;
    fillings: Array<IIngredient>;
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
    readonly number?: Array<IIngredient>;
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

export type TConstructorAction =
    | IAddIngredient
    | IReorderIngredients
    | IDeleteIngredient
    | IResetIngredient;


export type TIngredientsAction =
    | IGetIngredientsRequest
    | IGetIngredientsSuccess
    | IGetIngredientsFailed;

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






export interface ICurrentIngredientInitialState {
    currentIngredient: IIngredient | null;
}

export interface ICurrentIngredient {
    readonly type: typeof CURRENT_INGREDIENT;
    readonly payload: IIngredient;
}

export type TCurrenIngredientAction =
    | ICurrentIngredient;




export interface IOrderInitialState {
    order?: null | number;
    orderRequest: boolean;
    orderFailed?: boolean;
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

export type TOrderAction =
    | IGetOrderRequest
    | IGetOrderSuccess
    | IGetOrderFailed
    | IResetOrder;


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

