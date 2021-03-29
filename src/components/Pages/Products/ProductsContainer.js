import Products from './Products';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { useState } from 'react';

const ProductsContainer = () => {
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

  const match = useRouteMatch();
  let productsList = useSelector((store) => store.products);
  if (match.params.category) {
    let param =
      match.params.category === 'watch' ? 'series' : match.params.category;
    productsList = productsList.filter((prod) =>
      prod.title.toLowerCase().includes(param)
    );
  }

  return (
    <Products
      productsList={productsList}
      isModalOpen={isModalOpen}
      modalItem={modalItem}
      openModal={openModal}
      closeModal={closeModal}
    />
  );
};

export default ProductsContainer;
