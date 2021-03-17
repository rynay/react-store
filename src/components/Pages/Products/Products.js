import s from './Products.module.css';
import { store } from '../../../store'
import Product from './Product'
 
const Products = () => {
  const products = store.products.map(product => <Product key={product.id} productInfo={product} />)
  return ( 
    <div>
      <div className={s.products__header}>
        <h1>Our Products</h1>
        
      </div>
      <section className={s.products__grid}>
        { products }
      </section>
    </div>
    
   );
}
 
export default Products;