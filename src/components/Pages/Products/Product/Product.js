import { useSelector } from 'react-redux';
import s from './Product.module.css'

const Product = ({ productInfo }) => {
  const { title, img, price, id } = productInfo;
  const cart = useSelector(store => store.cart);

  const isInCart = cart.includes(prod => prod.id === id);

  return ( 
    <section className={s.product}>
      <div className={s.product__image_container}>
        <img src={img} alt=""/>
        <button className={s.button} disabled={isInCart}>{isInCart ? 'In Cart' : 'Add'}</button>
      </div>
      <div className={s.product__info}>
        <h2 className={s.product__title}>{ title }</h2>
        <p className={s.product__price}>$ { price }</p>
      </div>

    </section>
   );
}
 
export default Product;