import s from './Product.module.css'

const Product = ({ productInfo }) => {
  const { title, img, price, inCart } = productInfo;

  return ( 
    <section className={s.product}>
      <div className={s.product__image_container}>
        <img src={img} alt=""/>
        <button className={s.button} disabled={inCart}>{inCart ? 'In Cart' : 'Add'}</button>
      </div>
      <div className={s.product__info}>
        <h2 className={s.product__title}>{ title }</h2>
        <p className={s.product__price}>$ { price }</p>
      </div>

    </section>
   );
}
 
export default Product;