import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cart from './Cart'
import { removeAllAction } from '../../../store/AC'
import { TState } from '../../../store/types'

const CartContainer = () => {
  const cart = useSelector((store: TState) => store.cart)
  const dispatch = useDispatch()

  const removeAll = () => {
    dispatch(removeAllAction())
  }

  return <Cart cart={cart} removeAll={removeAll} />
}

export default CartContainer
