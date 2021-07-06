import axios from 'axios';
import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAILURE,
  CLEAR_ERRORS,
  GET_PRODUCT_DETAILS,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
} from './actionTypes';

export const getProducts =
  (keyword = '', currentPage = 1, price, category) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_PRODUCTS_REQUEST,
      });
      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}`;

      if (category) {
        link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}`;
      }

      const { data } = await axios.get(link);
      console.log(data);
      dispatch({
        type: ALL_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCTS_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_DETAILS,
    });
    const { data } = await axios.get(`/api/v1/products/:${id}`);
    console.log(data);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILURE,
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
