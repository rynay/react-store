import CartProduct from './CartProduct';
import s from './Cart.module.css';
import Banner from '../../Banner';

const Cart = ({ cart, removeAll }) => {
  const total = cart.reduce((acc, item) => acc + item.total, 0);

  const items = cart.map((item) => <CartProduct key={item.id} item={item} />);

  return (
    <>
      {items.length ? (
        <div className={s.container}>
          <section className={s.items_container}>
            <p className={s.category}>products</p>
            <p className={s.category}>name of product</p>
            <p className={s.category}>price</p>
            <p className={s.category}>quantity</p>
            <p className={s.category}>remove</p>
            <p className={s.category}>total</p>
            {items}
          </section>
          <div className={s.total}>
            <button onClick={removeAll} className={s.remove_all}>
              Remove All
            </button>
            <div>Subtotal: $ {total}</div>
            <div>Taxes: $ {(total * 0.07).toFixed(0)}</div>
            <div>Total: $ {(total * 1.07).toFixed(0)}</div>
          </div>
        </div>
      ) : null}
      <>{!items.length ? <Banner title="Your cart is empty" /> : null}</>
    </>
  );
};

export default Cart;
