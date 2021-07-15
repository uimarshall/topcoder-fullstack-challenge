import { combineReducers } from 'redux';
import { cartReducer } from './cartReducers';
import {
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
} from './orderReducers';
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
  newOrder: newOrderReducer,
  myOrder: myOrdersReducer,
  orderDetails: orderDetailsReducer,
});

export default rootReducer;
