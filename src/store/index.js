import { createStore, combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
})

export const store = createStore(reducer);
