import CartProduct from './CartProduct';
import { useSelector } from 'react-redux';
import s from './Cart.module.css';

const Cart = () => {
  const cart = useSelector(store => store.cart);

  const total = cart.reduce((acc, item) => acc + item.total, 0);

  const items = cart.map(item => <CartProduct key={item.id} item={item}/>)

  return ( 
    <section className={s.container}>
      { items }

      {total ? <div className={s.total}>Total: $ {total}</div> : null}
    </section>
   );
}
 
export default Cart;