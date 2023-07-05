import {
  USER_REGISTER_FORM_SUBMIT,
  USER_REGISTER_FORM_SUBMIT_SUCCESS,
  USER_REGISTER_FORM_SUBMIT_FAILED,
  USER_LOGIN_FORM_SUBMIT,
  USER_LOGIN_FORM_SUBMIT_SUCCESS,
  USER_LOGIN_FORM_SUBMIT_FAILED,
  USER_ACCESS_ALLOWED,
  USER_ACCESS_DENIED,
  CHANGE_USER_DATA_FORM_SUBMIT,
  CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS,
  CHANGE_USER_DATA_FORM_SUBMIT_FAILED,
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
  RESET_PASSWORD_FORM_SUBMIT_FAILED,
} from '../actions/userForm.js';

const initialState = {
  registerForm: {
    name: "",
    email: "",
    password: "",
  },

  loginForm: {
    email: "",
    password: "",
  },

  user: {
    email: "",
    name: "",
  },

  forgotPasswordForm: {
    email: "",
  },

  resetPasswordForm: {
    password: "",
    token: "",
  },

  isAuth: false,

  registrationSubmit: false,
  registrationFailed: false,

  loginSubmit: false,
  loginFailed: false,

  forgotPasswordSubmit: false,
  forgotPasswordFailed: false,
  resetEmailSent: false,

  resetPasswordSubmit: false,
  resetPasswordFailed: false,

  changeUserDataSubmit: false,
  changeUserDataFailed: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_FORM_SUBMIT: {
      return {
        ...state,
        registrationSubmit: true,
      };
    }
    case USER_REGISTER_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          name: '',
          email: '',
          password: '',
        },
      };
    }
    case USER_REGISTER_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        registrationSubmit: false,
        registrationFailed: true,
      };
    }
    case USER_LOGIN_FORM_SUBMIT: {
      return {
        ...state,
        loginSubmit: true,
      };
    }
    case USER_LOGIN_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        loginForm: { ...state.loginForm, email: '', password: '' },
        user: {
          ...state.user,
          email: action.payload.email,
          name: action.payload.name,
        },
        isAuth: true,
      };
    }
    case USER_LOGIN_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        loginSubmit: false,
        loginFailed: true,
      };
    }

    case USER_ACCESS_ALLOWED: {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email,
          name: action.payload.name,
        },
        isAuth: true,
      };
    }
    case USER_ACCESS_DENIED: {
      return {
        ...state,
        isAuth: false,
      };
    }

    case CHANGE_USER_DATA_FORM_SUBMIT: {
      return {
        ...state,
        changeUserDataSubmit: true,
      };
    }
    case CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email,
          name: action.payload.name,
        },
      };
    }
    case CHANGE_USER_DATA_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        changeUserDataSubmit: false,
        changeUserDataFailed: true,
      };
    }
    case FORGOT_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        forgotPasswordSubmit: true,
      };
    }
    case FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        forgotPasswordForm: {
          ...state.forgotPasswordForm,
          email: '',
        },
        resetEmailSent: true,
      };
    }
    case FORGOT_PASSWORD_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        forgotPasswordSubmit: false,
        forgotPasswordFailed: true,
      };
    }
    case RESET_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        resetPasswordSubmit: true,
      };
    }
    case RESET_PASSWORD_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        resetPasswordForm: {
          ...state.resetPasswordForm,
          password: '',
          token: '',
        },
        resetEmailSent: false,
      };
    }
    case RESET_PASSWORD_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        resetPasswordSubmit: false,
        resetPasswordFailed: true,
      };
    }

    default:
      return state;
  }
}
