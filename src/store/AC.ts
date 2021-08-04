import { TItem } from '../types'
import * as AT from './AT'

export const addItemAction = (payload: TItem) => ({
  type: AT.ADD_TO_CART,
  payload,
})
export const removeItemAction = (id: TItem['id']) => ({
  type: AT.REMOVE_FROM_CART,
  payload: id,
})
export const incrementItemAction = (id: TItem['id']) => ({
  type: AT.INCREMENT_PRODUCT_COUNT,
  payload: id,
})
export const decrementItemAction = (id: TItem['id']) => ({
  type: AT.DECREMENT_PRODUCT_COUNT,
  payload: id,
})

export const removeAllAction = () => ({ type: AT.REMOVE_ALL_FROM_CART })
