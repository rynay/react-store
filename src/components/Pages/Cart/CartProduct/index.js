import s from './CartProduct.module.css';
import { useDispatch } from 'react-redux';
import {
  incrementItemAction,
  decrementItemAction,
} from '../../../../store/cartReducer';

const CartProduct = ({ item }) => {
  const { title, img, count, total } = item;
  const dispatch = useDispatch();

  const incItem = () => {
    dispatch(incrementItemAction(item.id));
  };

  const decItem = () => {
    dispatch(decrementItemAction(item.id));
  };

  return (
    <section className={s.item}>
      <div className={s.image_container}>
        <img src={img} alt="" />
      </div>
      <h2 className={s.title}>{title}</h2>
      <div className={s.info}>
        <div className={s.count}>
          <button onClick={incItem} className={s.button}>
            {' '}
            +{' '}
          </button>
          <div className={s.counter}>{count}</div>
          <button onClick={decItem} className={s.button}>
            {' '}
            -{' '}
          </button>
        </div>
        <div className={s.total}> $ {total}</div>
      </div>
    </section>
  );
};

export default CartProduct;
