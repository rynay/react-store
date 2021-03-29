import CartProduct from './CartProduct';
import { useDispatch } from 'react-redux';
import {
  incrementItemAction,
  decrementItemAction,
  removeItemAction,
} from '../../../../store/cartReducer';

const CartProductContainer = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeItemAction(id));
  };

  const incItem = (id) => {
    dispatch(incrementItemAction(id));
  };

  const decItem = (id) => {
    dispatch(decrementItemAction(id));
  };

  return (
    <CartProduct
      incItem={incItem}
      decItem={decItem}
      removeItem={removeItem}
      item={item}
    />
  );
};

export default CartProductContainer;
