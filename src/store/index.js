import { createStore, combineReducers } from 'redux';
// import { products } from './products';
import { cartReducer } from './cartReducer';

const reducer = combineReducers({
  // products: products,
  cart: cartReducer,
})

export const store = createStore(reducer);
