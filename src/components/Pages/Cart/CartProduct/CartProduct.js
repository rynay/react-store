import s from './CartProduct.module.css';

const CartProduct = ({ item, incItem, decItem, removeItem }) => {
  const { title, img, count, total, price } = item;

  const onInc = () => {
    incItem(item.id);
  };
  const onDec = () => {
    decItem(item.id);
  };
  const onRemove = () => {
    removeItem(item.id);
  };

  return (
    <>
      <div className={s.image_container}>
        <img src={img} alt="" />
      </div>
      <h2 className={s.title}>{title}</h2>
      <p className={s.price}>$ {price}</p>
      <div className={s.quantity}>
        <div className={s.count}>
          <button onClick={onInc} className={`${s.button} ${s.inc}`}>
            {' '}
            +{' '}
          </button>
          <div className={s.counter}>{count}</div>
          <button onClick={onDec} className={`${s.button} ${s.dec}`}>
            {' '}
            -{' '}
          </button>
        </div>
      </div>
      <button onClick={onRemove} className={s.remove}></button>
      <div className={s.total}> $ {total}</div>
    </>
  );
};

export default CartProduct;
