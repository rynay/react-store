import Products from './Products';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';

const ProductsContainer = () => {
  const match = useRouteMatch();
  let productsList = useSelector((store) => store.products);
  if (match.params.category) {
    let param =
      match.params.category === 'watch' ? 'series' : match.params.category;
    productsList = productsList.filter((prod) =>
      prod.title.toLowerCase().includes(param)
    );
  }

  return <Products productsList={productsList} />;
};

export default ProductsContainer;
