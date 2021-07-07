import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_ERRORS,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
    case SIGN_UP_USER_REQUEST:
    case LOAD_USER_REQUEST:
      return { loading: true, isAuthenticated: false };

    case LOGIN_SUCCESS:
    case SIGN_UP_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true, user: payload };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };

    case LOAD_USER_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: payload,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        error: payload,
      };

    case LOGIN_FAILURE:
    case SIGN_UP_USER_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
