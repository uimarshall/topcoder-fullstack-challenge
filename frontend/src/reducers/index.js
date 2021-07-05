import { combineReducers } from 'redux';
import { productDetailReducer, productsReducer } from './productReducers';

const initialState = {
  products: [],
  product: {},
  loading: false,
};
const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailReducer,
});

export default rootReducer;
