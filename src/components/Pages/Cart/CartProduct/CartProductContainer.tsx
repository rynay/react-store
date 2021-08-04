import React from 'react'
import CartProduct from './CartProduct'
import { useDispatch } from 'react-redux'
import {
  incrementItemAction,
  decrementItemAction,
  removeItemAction,
} from '../../../../store/cartReducer'
import { TItem, TItemActionHandler } from '../../../../types'

type PropTypes = {
  item: TItem
}

const CartProductContainer = ({ item }: PropTypes) => {
  const dispatch = useDispatch()

  const removeItem: TItemActionHandler = (id) => {
    dispatch(removeItemAction(id))
  }

  const incItem: TItemActionHandler = (id) => {
    dispatch(incrementItemAction(id))
  }

  const decItem: TItemActionHandler = (id) => {
    dispatch(decrementItemAction(id))
  }

  return (
    <CartProduct
      incItem={incItem}
      decItem={decItem}
      removeItem={removeItem}
      item={item}
    />
  )
}

export default CartProductContainer
