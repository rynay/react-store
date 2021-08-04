import { products } from './products'
import { TAction } from './types'

export const productReducer = (store = products, action: TAction) => {
  switch (action.type) {
    default:
      return store
  }
}
