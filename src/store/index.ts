import { createStore, combineReducers, Store } from 'redux'
import { productReducer } from './productReducer'
import { cartReducer } from './cartReducer'
import { TAction, TState } from './types'

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
})

export const store: Store<TState, TAction> = createStore(reducer)
