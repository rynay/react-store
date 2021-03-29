import s from './Product.module.css';
import sInfo from './ProductInfo.module.css';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({ product, cart, addToCart, info = false, history }) => {
  const styles = info ? sInfo : s;
  const { title, img, price, id } = product;

  const isInCart = !!cart.filter((prod) => prod.id === id).length;

  const buttons = (
    <>
      {info ? (
        <>
          <Link
            to={'/products'}
            className={`${styles.button} ${styles.button_back}`}
          >
            To Products
          </Link>
          <Link
            to={isInCart ? '/cart' : ''}
            onClick={(e) => {
              e.preventDefault();
              if (!isInCart) {
                addToCart();
              } else {
                history.push('/cart');
              }
              return;
            }}
            className={`${styles.button} ${styles.button_cart}`}
            disabled={isInCart}
          >
            {isInCart ? 'In Cart' : 'Add'}
          </Link>
        </>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            if (!isInCart) addToCart();
            if (isInCart) history.push('/cart');
          }}
          className={`${styles.button} ${styles.button_cart}`}
        >
          {isInCart ? 'In Cart' : 'Add'}
        </button>
      )}
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

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }),
  cart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  info: PropTypes.bool,
};

export default withRouter(Product);
