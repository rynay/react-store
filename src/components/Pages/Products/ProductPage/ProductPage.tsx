import Product from '../Product'
import s from './ProductPage.module.css'
import React, { useState } from 'react'
import Modal from '../Modal'
import { TItem } from '../../../../types'

const ProductPage = () => {
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
  return (
    <section className={s.container}>
      <Product
        info
        openModal={openModal}
        isOpen={isModalOpen}
        modalItem={modalItem}
      />
      <Modal item={modalItem!} close={closeModal} isOpen={isModalOpen} />
    </section>
  )
}

export default ProductPage
