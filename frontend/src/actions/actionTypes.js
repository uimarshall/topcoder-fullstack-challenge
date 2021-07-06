/**
 * First We dispatch the ALL_PRODUCTS_REQUEST, and set loading to 'true
 * If we get a success from the backend, we dispatch ALL_PRODUCTS_SUCCESS.
 * if there is a failure, we dispatch ALL_PRODUCTS_FAIL.
 */
export const ALL_PRODUCTS_REQUEST = 'ALL_PRODUCTS_REQUEST';
export const ALL_PRODUCTS_SUCCESS = 'ALL_PRODUCTS_SUCCESS';
export const ALL_PRODUCTS_FAILURE = 'ALL_PRODUCTS_FAILURE';

export const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS';
export const PRODUCT_DETAILS_FAILURE = 'PRODUCT_DETAILS_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const CLEAN_AUTH_MESSAGE = 'CLEAN_AUTH_MESSAGE';
export const LOGOUT = 'LOGOUT';

export const CLEAR_ERRORS = 'CLEAR_ERRORS';
