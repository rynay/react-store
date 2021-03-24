import CartProduct from './CartProduct';
import { useDispatch } from 'react-redux';
import {
  incrementItemAction,
  decrementItemAction,
} from '../../../../store/cartReducer';

const CartProductContainer = ({ item }) => {
  const dispatch = useDispatch();

  const incItem = (id) => {
    dispatch(incrementItemAction(id));
  };

  const decItem = (id) => {
    dispatch(decrementItemAction(id));
  };

  return <CartProduct incItem={incItem} decItem={decItem} item={item} />;
};

export default CartProductContainer;
