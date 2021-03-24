import s from './Product.module.css';
import { Link } from 'react-router-dom';

const Product = ({ product, cart, addToCart, info = false }) => {
  const { title, img, price, id } = product;

  const isInCart = !!cart.filter((prod) => prod.id === id).length;

  return (
    <Link to={`/product/${product.id}`} className={s.link}>
      <section className={s.product}>
        <div className={s.product__image_container}>
          <img src={`/${img}`} alt="" />
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart();
            }}
            className={s.button}
            disabled={isInCart}
          >
            {isInCart ? 'In Cart' : 'Add'}
          </button>
        </div>
        <div className={s.product__info}>
          <h2 className={s.product__title}>{title}</h2>
          <p className={s.product__price}>$ {price}</p>
        </div>
        {info && <p className={s.description}>{product.info}</p>}
      </section>
    </Link>
  );
};

export default Product;
