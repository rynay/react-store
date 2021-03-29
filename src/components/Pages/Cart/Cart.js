import CartProduct from './CartProduct';
import s from './Cart.module.css';

const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.total, 0);

  const items = cart.map((item) => <CartProduct key={item.id} item={item} />);

  return (
    <div className={s.container}>
      <section className={s.items_container}>
        {items.length ? (
          <>
            <p className={s.category}>products</p>
            <p className={s.category}>name of product</p>
            <p className={s.category}>price</p>
            <p className={s.category}>quantity</p>
            <p className={s.category}>remove</p>
            <p className={s.category}>total</p>
          </>
        ) : null}
        {items}
      </section>
      {total ? (
        <div className={s.total}>
          <div>Subtotal: $ {total}</div>
          <div>Taxes: $ {(total * 0.07).toFixed(0)}</div>
          <div>Total: $ {(total * 1.07).toFixed(0)}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
