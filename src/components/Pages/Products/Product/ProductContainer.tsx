
import { useDispatch, useSelector } from 'react-redux'
import { addItemAction } from '../../../../store/AC'
import { products } from '../../../../store/products'
import { useRouteMatch } from 'react-router'
import Product from './Product'
import { TItem } from '../../../../types'
import { TState } from '../../../../store/types'

type PropTypes = {
  info?: boolean
  openModal: (item: TItem) => void
  productInfo?: TItem
  modalItem?: TItem | null
  isOpen?: boolean
}

const ProductContainer = ({ productInfo, info, openModal }: PropTypes) => {
  const match: {
    params: {
      id: string
    }
  } = useRouteMatch()
  const product =
    productInfo || products.find((prod) => +prod.id === +match.params.id)

  const cart = useSelector((store: TState) => store.cart)
  const dispatch = useDispatch()

  const addToCart = () => {
    if (product) {
      openModal(product)
      dispatch(addItemAction(product))
    }
  }

  return (
    <Product info={info} product={product!} cart={cart} addToCart={addToCart} />
  )
}

export default ProductContainer
