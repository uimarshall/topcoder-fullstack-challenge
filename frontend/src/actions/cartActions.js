import axios from 'axios';
import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  SAVE_SHIPPING_INFO,
} from './actionTypes';

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/products/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.data._id,
      name: data.data.name,
      price: data.data.price,
      image: data.data.images[0].url,
      stock: data.data.stock,
      quantity,
    },
  });
  // Convert the JSON objects to string for localStorage
  // Save cart to localStorage
  // Load items in the cart from localStorage incase of refresh
  // Pull whatever is in the state(getState()),take out the cartItems and save it to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeItemFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM_CART,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem('shippingInfo', JSON.stringify(data));
};
