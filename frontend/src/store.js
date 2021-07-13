import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

// In the initialState, we have to put in all the products from the localStorage
const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(rootReducer, initialState, enhancer);

export default store;
