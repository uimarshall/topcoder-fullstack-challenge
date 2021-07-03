import { combineReducers } from 'redux';
import { productDetailReducer, productsReducer } from './productReducers';

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailReducer,
});

export default rootReducer;
