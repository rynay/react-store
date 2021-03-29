import Product from '../Product';
import s from './ProductPage.module.css';
import { useState } from 'react';
import Modal from '../Modal';

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  let timer;

  const openModal = (item) => {
    clearTimeout(timer);
    setIsModalOpen(true);
    setModalItem(item);

    timer = setTimeout(() => {
      closeModal();
    }, 2000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className={s.container}>
      <Product
        info
        openModal={openModal}
        isOpen={isModalOpen}
        modalItem={modalItem}
      />
      <Modal item={modalItem} close={closeModal} isOpen={isModalOpen} />
    </section>
  );
};

export default ProductPage;
