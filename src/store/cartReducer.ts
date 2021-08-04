import * as AT from './AT'
import { TAction, TState } from './types'

export const cartReducer = (store: TState['cart'] = [], action: TAction) => {
  switch (action.type) {
    case AT.ADD_TO_CART:
      const newItem = action.payload
      newItem.count = 1
      newItem.total = newItem.price
      return [...store, newItem]

    case AT.REMOVE_FROM_CART:
      return [...store.filter((product) => product.id !== action.payload)]

    case AT.REMOVE_ALL_FROM_CART:
      return []

    case AT.INCREMENT_PRODUCT_COUNT:
      const newStoreInc = [...store]
      const idxInc = newStoreInc.findIndex((prod) => prod.id === action.payload)
      const targetProductInc = { ...newStoreInc[idxInc] }

      targetProductInc.count += 1
      targetProductInc.total += targetProductInc.price
      newStoreInc[idxInc] = targetProductInc
      return newStoreInc

    case AT.DECREMENT_PRODUCT_COUNT:
      const newStoreDec = [...store]
      const idxDec = newStoreDec.findIndex((prod) => prod.id === action.payload)
      const targetProductDec = { ...newStoreDec[idxDec] }

      if (targetProductDec.count === 1)
        return [...store.filter((prod) => prod.id !== action.payload)]

      targetProductDec.count -= 1
      targetProductDec.total -= targetProductDec.price
      newStoreDec[idxDec] = targetProductDec
      return newStoreDec

    default:
      return store
  }
}
