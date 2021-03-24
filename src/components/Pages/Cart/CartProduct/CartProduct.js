import s from './CartProduct.module.css';

const CartProduct = ({ item, incItem, decItem }) => {
  const { title, img, count, total } = item;

  const onInc = () => {
    incItem(item.id);
  };
  const onDec = () => {
    decItem(item.id);
  };

  return (
    <section className={s.item}>
      <div className={s.image_container}>
        <img src={img} alt="" />
      </div>
      <h2 className={s.title}>{title}</h2>
      <div className={s.info}>
        <div className={s.count}>
          <button onClick={onInc} className={s.button}>
            {' '}
            +{' '}
          </button>
          <div className={s.counter}>{count}</div>
          <button onClick={onDec} className={s.button}>
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
