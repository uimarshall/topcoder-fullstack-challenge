import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAILURE,
  CLEAR_ERRORS,
} from './actions/actionTypes';

const initialState = {
  products: [],
  loading: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return { loading: true, products: [] };

    case ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
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
