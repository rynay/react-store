import s from './Products.module.css';
import Product from './Product';
import Modal from './Modal';

const Products = ({
  productsList,
  openModal,
  closeModal,
  isModalOpen,
  modalItem,
}) => {
  const products = productsList.map((product) => (
    <Product key={product.id} productInfo={product} openModal={openModal} />
  ));

  return (
    <div className={s.container}>
      <div className={s.products__header}>
        <h1>Our Products</h1>
      </div>
      <div className={s.div}>
        <section className={s.products__grid}>{products}</section>
      </div>
      <Modal item={modalItem} close={closeModal} isOpen={isModalOpen} />
    </div>
  );
};

export default Products;
