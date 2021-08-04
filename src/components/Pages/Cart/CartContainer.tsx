import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cart from './Cart'
import { removeAllAction } from '../../../store/cartReducer'

const CartContainer = () => {
  const cart = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  const removeAll = () => {
    dispatch(removeAllAction())
  }

  return <Cart cart={cart} removeAll={removeAll} />
}

export default CartContainer
