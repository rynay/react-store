import s from './Product.module.css';
import sInfo from './ProductInfo.module.css';
import { Link } from 'react-router-dom';

const Product = ({ product, cart, addToCart, info = false }) => {
  const styles = info ? sInfo : s;
  const { title, img, price, id } = product;

  const isInCart = !!cart.filter((prod) => prod.id === id).length;

  const buttons = (
    <>
      {info ? (
        <Link
          to={'/products'}
          className={`${styles.button} ${styles.button_back}`}
        >
          To Products
        </Link>
      ) : null}
      <Link
        to={isInCart ? '/cart' : ''}
        onClick={(e) => {
          if (isInCart) return;
          e.preventDefault();
          addToCart();
        }}
        className={`${styles.button} ${styles.button_cart}`}
        disabled={isInCart}
      >
        {isInCart ? 'In Cart' : 'Add'}
      </Link>
    </>
  );

  const productDetails = (
    <section className={styles.product}>
      <div className={styles.product__image_container}>
        <img src={`/${img}`} alt="" />
        {info ? (
          <div className={styles.buttons_container}>{buttons}</div>
        ) : (
          buttons
        )}
      </div>
      <div className={styles.product__info}>
        <h2 className={styles.product__title}>{title}</h2>
        <p className={styles.product__price}>$ {price}</p>
        {info && <p className={styles.description}>{product.info}</p>}
      </div>
    </section>
  );

  return (
    <>
      {info ? (
        productDetails
      ) : (
        <Link to={`/product/${product.id}`} className={styles.link}>
          {productDetails}
        </Link>
      )}
    </>
  );
};

export default Product;
