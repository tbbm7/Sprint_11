import {
  registerUserApi,
  loginUserApi,
  checkUserAccessApi,
  refreshTokenApi,
  logoutUserApi,
  changeUserDataApi,
  forgotPasswordApi,
  resetPasswordApi,
} from '../../utils/formApi';
import { parseCookie, getCookie, setCookie, deleteCookie } from '../../utils/cookie';
import {
  IRegisterUserRequest,
  ILoginUserRequest,
  IResetPasswordRequest,
  IChangeUserDataRequest,
} from "../types/data";
import { AppDispatch } from "../types/index";




export const USER_REGISTER_FORM_SUBMIT = 'USER_REGISTER_FORM_SUBMIT';
export const USER_REGISTER_FORM_SUBMIT_SUCCESS = 'USER_REGISTER_FORM_SUBMIT_SUCCESS';
export const USER_REGISTER_FORM_SUBMIT_FAILED = 'USER_REGISTER_FORM_SUBMIT_FAILED';

export function registerUser(userData: IRegisterUserRequest, action: () => void) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: USER_REGISTER_FORM_SUBMIT });
    registerUserApi(userData)
      .then((res) => {
        dispatch({ type: USER_REGISTER_FORM_SUBMIT_SUCCESS });
        setCookie('accessToken', parseCookie(res.accessToken));
        setCookie('refreshToken', res.refreshToken);
        action();
      })
      .catch(() => {
        dispatch({ type: USER_REGISTER_FORM_SUBMIT_FAILED });
      });
  };
}

export const USER_LOGIN_FORM_SUBMIT = 'USER_LOGIN_FORM_SUBMIT';
export const USER_LOGIN_FORM_SUBMIT_SUCCESS = 'USER_LOGIN_FORM_SUBMIT_SUCCESS';
export const USER_LOGIN_FORM_SUBMIT_FAILED = 'USER_LOGIN_FORM_SUBMIT_FAILED';


export function loginUser(userData: ILoginUserRequest, action: () => void) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: USER_LOGIN_FORM_SUBMIT });
    loginUserApi(userData)
      .then((res) => {
        dispatch({ type: USER_LOGIN_FORM_SUBMIT_SUCCESS, payload: res.user });
        setCookie('accessToken', parseCookie(res.accessToken));
        setCookie('refreshToken', res.refreshToken);
        action();
      })
      .catch(() => {
        dispatch({ type: USER_LOGIN_FORM_SUBMIT_FAILED });
      });
  };
}

export const USER_ACCESS_ALLOWED = 'USER_ACCESS_ALLOWED';
export const USER_ACCESS_DENIED = 'USER_ACCESS_DENIED';

export function checkUserAccess() {
  return function (dispatch: AppDispatch) {
    return checkUserAccessApi(getCookie('accessToken'))
      .then((res) => {
        dispatch({ type: USER_ACCESS_ALLOWED, payload: res.user });
      })
      .catch((err) => {
        if (err.message === 'jwt expired' || 'jwt malformed') {
          dispatch(refreshUserToken(getCookie('refreshToken')));
        }
      });
  };
}

export function refreshUserToken(refreshToken: string | undefined) {
  return function (dispatch: AppDispatch) {
    return refreshTokenApi(refreshToken).then((res) => {
      setCookie('accessToken', parseCookie(res.accessToken));
      setCookie('refreshToken', res.refreshToken);
      dispatch(checkUserAccess());
    });
  };
}

export function logoutUser(refreshToken: string | undefined, action: () => void) {
  return function (dispatch: AppDispatch) {
    logoutUserApi(refreshToken).then(() => {
      dispatch({ type: USER_ACCESS_DENIED });
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      action();
    });
  };
}

export const CHANGE_USER_DATA_FORM_SUBMIT = 'CHANGE_USER_DATA_FORM_SUBMIT';
export const CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS = 'CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS';
export const CHANGE_USER_DATA_FORM_SUBMIT_FAILED = 'CHANGE_USER_DATA_FORM_SUBMIT_FAILED';

export function changeUserData(userData: IChangeUserDataRequest) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: CHANGE_USER_DATA_FORM_SUBMIT });
    changeUserDataApi(userData, getCookie('accessToken'))
      .then((res) => {
        dispatch({
          type: CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS,
          payload: res.user,
        });
      })
      .catch((err) => {
        if (err.message === 'jwt expired' || 'jwt malformed') {
          dispatch(refreshUserToken(getCookie('refreshToken'))).then(() => {
            changeUserDataApi(userData, getCookie('accessToken'))
              .then((res) => {
                dispatch({
                  type: CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS,
                  payload: res.user,
                });
              })
              .catch(() => {
                dispatch({ type: CHANGE_USER_DATA_FORM_SUBMIT_FAILED });
              });
          });
        }
      });
  };
}

export const FORGOT_PASSWORD_FORM_SUBMIT = 'FORGOT_PASSWORD_FORM_SUBMIT';
export const FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS = 'FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS';
export const FORGOT_PASSWORD_FORM_SUBMIT_FAILED = 'FORGOT_PASSWORD_FORM_SUBMIT_FAILED';

export function forgotPassword(email: { email: string }, action: () => void) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: FORGOT_PASSWORD_FORM_SUBMIT });
    forgotPasswordApi(email)
      .then(() => {
        dispatch({ type: FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS });
        action();
      })
      .catch(() => {
        dispatch({ type: FORGOT_PASSWORD_FORM_SUBMIT_FAILED });
      });
  };
}

export const RESET_PASSWORD_FORM_SUBMIT = 'RESET_PASSWORD_FORM_SUBMIT';
export const RESET_PASSWORD_FORM_SUBMIT_SUCCESS = 'RESET_PASSWORD_FORM_SUBMIT_SUCCESS';
export const RESET_PASSWORD_FORM_SUBMIT_FAILED = 'RESET_PASSWORD_FORM_SUBMIT_FAILED';


export function resetPassword(userData: IResetPasswordRequest, action: () => void) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: RESET_PASSWORD_FORM_SUBMIT });
    resetPasswordApi(userData)
      .then(() => {
        dispatch({ type: RESET_PASSWORD_FORM_SUBMIT_SUCCESS });
        action();
      })
      .catch(() => {
        dispatch({ type: RESET_PASSWORD_FORM_SUBMIT_FAILED });
      });
  };
}
