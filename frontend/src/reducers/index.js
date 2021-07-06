import { combineReducers } from 'redux';
import { productDetailReducer, productsReducer } from './productReducers';
import { authReducer } from './userReducers';

const initialState = {
  products: [],
  product: {},
  loading: false,
};
const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailReducer,
  auth: authReducer,
});

export default rootReducer;
