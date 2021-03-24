import Product from '../Product';
import s from './ProductPage.module.css';

const ProductPage = () => {
  return (
    <section className={s.container}>
      <Product info />
    </section>
  );
};

export default ProductPage;
