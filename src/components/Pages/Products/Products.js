import s from './Products.module.css';
import Product from './Product';

const Products = ({ productsList }) => {
  const products = productsList.map((product) => (
    <Product key={product.id} productInfo={product} />
  ));

  return (
    <div className={s.container}>
      <div className={s.products__header}>
        <h1>Our Products</h1>
      </div>
      <div className={s.div}>
        <section className={s.products__grid}>{products}</section>
      </div>
    </div>
  );
};

export default Products;
