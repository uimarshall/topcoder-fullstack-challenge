import axios from 'axios';

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
} from './actionTypes';

// Login
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/v1/users/login',
      { email, password }, //send along the email and password received from forms
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// Load Currently Logged In User
export const loadLoggedInUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get('/api/v1/users/me');

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// Register User
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_UP_USER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data', //multipart/form-data bc we need to pass in other things like avatar.
      },
    };

    const { data } = await axios.post(
      '/api/v1/users/register',
      userData, //send along the email and password received from forms
      config
    );

    dispatch({
      type: SIGN_UP_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
