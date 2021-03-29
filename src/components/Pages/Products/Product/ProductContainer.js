import { useDispatch, useSelector } from 'react-redux';
import { addItemAction } from '../../../../store/cartReducer';
import { products } from '../../../../store/products';
import { useRouteMatch } from 'react-router';
import Product from './Product';

const ProductContainer = ({ productInfo, info, openModal }) => {
  const match = useRouteMatch();
  let product =
    productInfo || products.find((prod) => +prod.id === +match.params.id);

  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    debugger;
    openModal(product);
    dispatch(addItemAction(product));
  };

  return (
    <Product info={info} product={product} cart={cart} addToCart={addToCart} />
  );
};

export default ProductContainer;
