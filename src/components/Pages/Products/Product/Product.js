import { useDispatch, useSelector } from 'react-redux';
import s from './Product.module.css'
import { addItemAction } from '../../../../store/cartReducer';
import { products } from '../../../../store/products';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const Product = (props) => {
  console.log(props);
  const { productInfo } = props;
  const match = useRouteMatch();
  console.log(match);
  let product = productInfo || products.find(prod => prod.id == match.params.id);
  
  const { title, img, price, id } = product;
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const isInCart = !!(cart.filter(prod => prod.id === id).length);

  const addToCart = () => {
    dispatch(addItemAction(product));
  }

  return ( 
    <Link to={`/product/${product.id}`} className={s.link}>
      <section className={s.product}>
      <div className={s.product__image_container}>
        <img src={`/${img}`} alt=""/>
        <button onClick={(e) => {e.preventDefault(); addToCart()}} className={s.button} disabled={isInCart}>{isInCart ? 'In Cart' : 'Add'}</button>
      </div>
      <div className={s.product__info}>
        <h2 className={s.product__title}>{ title }</h2>
        <p className={s.product__price}>$ { price }</p>
      </div>
      { props.info && <p className={s.description}>{product.info}</p> }
    </section>
    </Link>
   );
}
 
export default Product;