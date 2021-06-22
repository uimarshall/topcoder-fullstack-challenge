/**
 * First We dispatch the ALL_PRODUCTS_REQUEST, and set loading to 'true
 * If we get a success from the backend, we dispatch ALL_PRODUCTS_SUCCESS.
 * if there is a failure, we dispatch ALL_PRODUCTS_FAIL.
 */
export const ALL_PRODUCTS_REQUEST = 'ALL_PRODUCTS_REQUEST';
export const ALL_PRODUCTS_SUCCESS = 'ALL_PRODUCTS_SUCCESS';
export const ALL_PRODUCTS_FAILURE = 'ALL_PRODUCTS_FAILURE';
export const MEASURE_LOADING = 'MEASURE_LOADING';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const STATISTICS_MEASUREMENTS = 'STATISTICS_MEASUREMENTS';
export const STATISTICS_MEASUREMENTS_BAD = 'STATISTICS_MEASUREMENTS_BAD';
export const STATISTICS_LOADING_COURSES = 'STATISTICS_LOADING_COURSES';
export const STATISTICS_LOADING_MEASUREMENTS =
  'STATISTICS_LOADING_MEASUREMENTS';
export const MY_MEASUREMENTS_OK = 'MY_MEASUREMENTS_OK';
export const MY_MEASUREMENTS_BAD = 'MY_MEASUREMENTS_BAD';
export const MY_MEASUREMENTS_LOADING = 'MY_MEASUREMENTS_LOADING';
export const MY_COURSES_OK = 'MY_COURSES_OK';
export const MY_COURSES_BAD = 'MY_COURSES_BAD';
export const MY_COURSES_LOADING = 'MY_COURSES_LOADING';
export const COURSES_OK = 'COURSES_OK';
export const COURSES_BAD = 'COURSES_BAD';
export const COURSES_LOADING = 'COURSES_LOADING';
export const SIGN_UP_OK = 'SIGN_UP_OK';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const CLEAN_AUTH_MESSAGE = 'CLEAN_AUTH_MESSAGE';
export const LOGOUT = 'LOGOUT';
