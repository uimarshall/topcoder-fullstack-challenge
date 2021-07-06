import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_ERRORS,
} from '../actions/actionTypes';

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { loading: true, isAuthenticated: false };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true, user: payload };
    case LOGIN_FAILURE:
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
