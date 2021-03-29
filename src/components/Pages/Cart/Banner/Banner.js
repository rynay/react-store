import s from './Banner.module.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className={s.banner}>
      <h2>Your cart is empty</h2>
      <Link to="/products" className={s.shop}>
        Start Shopping
      </Link>
    </div>
  );
};

export default Banner;
