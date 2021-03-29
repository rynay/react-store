import s from './Banner.module.css';
import { Link } from 'react-router-dom';

const Banner = ({ title }) => {
  return (
    <div className={s.banner}>
      <h2>{title}</h2>
      <Link to="/products" className={s.shop}>
        Start Shopping
      </Link>
    </div>
  );
};

export default Banner;
