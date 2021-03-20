import CartProduct from './CartProduct';
import { useSelector } from 'react-redux';
import s from './Cart.module.css';

const Cart = () => {
  const cart = useSelector(store => store.cart);

  const items = cart.map(item => <CartProduct key={item.id} item={item}/>)

  return ( 
    <section>
      { items }
    </section>
   );
}
 
export default Cart;