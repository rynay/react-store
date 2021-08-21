
import Products from './Products'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { useState } from 'react'
import { TItem } from '../../../types'
import { TState } from '../../../store/types'

const ProductsContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalItem, setModalItem] = useState<TItem | null>(null)

  let timer: NodeJS.Timeout

  const openModal = (item: TItem) => {
    clearTimeout(timer)
    setIsModalOpen(true)
    setModalItem(item)

    timer = setTimeout(() => {
      closeModal()
    }, 2000)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const match: {
    params: {
      category?: string
    }
  } = useRouteMatch()
  let productsList = useSelector((store: TState) => store.products)
  if (match.params.category) {
    let param =
      match.params.category === 'watch' ? 'series' : match.params.category
    productsList = productsList.filter((prod: TItem) =>
      prod.title.toLowerCase().includes(param)
    )
  }

  return (
    <Products
      productsList={productsList}
      isModalOpen={isModalOpen}
      modalItem={modalItem}
      openModal={openModal}
      closeModal={closeModal}
    />
  )
}

export default ProductsContainer
