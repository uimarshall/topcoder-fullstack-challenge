import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAILURE,
  CLEAR_ERRORS,
  GET_PRODUCT_DETAILS,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  products: [],

  loading: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return { loading: true, products: [] };

    case ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.data, //we get the products here on success
        productsCount: action.payload.productsCount,
        resPerPage: action.payload.resPerPage,
        filteredProductsCount: action.payload.filteredProductsCount,
      };
    case ALL_PRODUCTS_FAILURE:
      return {
        loading: false,
        error: action.payload,
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

export const productDetailReducer = (
  state = { product: {} },
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCT_DETAILS:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, products: payload };
    case PRODUCT_DETAILS_FAILURE:
      return { ...state, error: payload, loading: false };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
