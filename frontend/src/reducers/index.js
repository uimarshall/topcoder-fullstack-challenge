import { combineReducers } from 'redux';
import { cartReducer } from './cartReducers';
import { productDetailReducer, productsReducer } from './productReducers';
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
} from './userReducers';

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
});

export default rootReducer;
