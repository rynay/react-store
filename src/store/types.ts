import { TItem } from '../types'
import * as AT from './AT'

export type TState = {
  products: TItem[]
  cart: TItem[]
}

type TAddItem = {
  type: typeof AT['ADD_TO_CART']
  payload: TItem
}
type TRemoveItem = {
  type: typeof AT['REMOVE_FROM_CART']
  payload: number
}
type TIncrementItem = {
  type: typeof AT['INCREMENT_PRODUCT_COUNT']
  payload: number
}
type TDecrementItem = {
  type: typeof AT['DECREMENT_PRODUCT_COUNT']
  payload: number
}

type TRemoveAll = {
  type: typeof AT['REMOVE_ALL_FROM_CART']
}

export type TAction =
  | TAddItem
  | TRemoveAll
  | TIncrementItem
  | TRemoveItem
  | TDecrementItem
