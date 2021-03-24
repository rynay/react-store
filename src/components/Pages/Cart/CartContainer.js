import { useSelector } from 'react-redux';
import Cart from './Cart';

const CartContainer = () => {
  const cart = useSelector((store) => store.cart);
  return <Cart cart={cart} />;
};

export default CartContainer;
