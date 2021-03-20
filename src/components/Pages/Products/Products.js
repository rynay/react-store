import s from './Products.module.css';
import Product from './Product'
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
 
const Products = () => {
  const match = useRouteMatch();
  console.log(match);
  let productsList = useSelector(store => store.products);
  if(match.params.category){
    let param = match.params.category === 'watch' ? 'series' : match.params.category; 
    productsList = productsList.filter(prod => prod.title.toLowerCase().includes(param));
  }
  const products = productsList.map(product => <Product key={product.id} productInfo={product} />)

  return ( 
    <div className={s.container}>
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