import {
  IRegisterUserRequest,
  ILoginUserRequest,
  IResetPasswordRequest,
  IChangeUserDataRequest,
} from "../services/types/data";


const config = {
  API_URL: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

export {config};

function checkResponse(res: Response) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

export function registerUserApi(userData: IRegisterUserRequest) {
  return fetch(`${config.API_URL}/auth/register`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(userData),
  }).then(checkResponse);
}

export function loginUserApi(userData: ILoginUserRequest) {
  return fetch(`${config.API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then(checkResponse);
}

export function checkUserAccessApi(accessToken: string | undefined) {
  return fetch(`${config.API_URL}/auth/user`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
  }).then(checkResponse);
}

export function refreshTokenApi(refreshToken: string | undefined) {
  return fetch(`${config.API_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  }).then(checkResponse);
}

export function logoutUserApi(refreshToken: string | undefined) {
  return fetch(`${config.API_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  }).then(checkResponse);
}

export function changeUserDataApi(userData: IChangeUserDataRequest, accessToken: string | undefined) {
  return fetch(`${config.API_URL}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(userData),
  }).then(checkResponse);
}


export function forgotPasswordApi(email: { email: string }) {
  return fetch(`${config.API_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  }).then(checkResponse);
}

export function resetPasswordApi(userData: IResetPasswordRequest) {
  return fetch(`${config.API_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then(checkResponse);
}
