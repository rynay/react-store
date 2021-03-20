import s from './Products.module.css';
import { store } from '../../../store'
import Product from './Product'
import { useSelector } from 'react-redux';
 
const Products = () => {
  const productsList = useSelector(store => store.products);
  const products = productsList.map(product => <Product key={product.id} productInfo={product} />)
  return ( 
    <div>
      <div className={s.products__header}>
        <h1>Our Products</h1>
      </div>
      <div className={s.div}>
        <section className={s.products__grid}>
          { products }
        </section>
      </div>
    </div>
    
   );
}
 
export default Products;