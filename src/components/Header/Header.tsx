import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to="/">
        <div className={s.logo}>
          <img src="/img/logo.svg" alt="logo" />
        </div>
      </NavLink>
      <nav className={s.nav}>
        <ul>
          <li className={s.category}>
            <NavLink exact to="/products" activeClassName={s.active}>
              Products
            </NavLink>
          </li>
          <li className={s.category}>
            <NavLink to="/products/iphone" activeClassName={s.active}>
              iPhone
            </NavLink>
          </li>
          <li className={s.category}>
            <NavLink to="/products/mac" activeClassName={s.active}>
              Mac
            </NavLink>
          </li>
          <li className={s.category}>
            <NavLink to="/products/ipad" activeClassName={s.active}>
              iPad
            </NavLink>
          </li>
          <li className={s.category}>
            <NavLink to="/products/watch" activeClassName={s.active}>
              Watch
            </NavLink>
          </li>
          <li className={s.cart}>
            <NavLink to="/cart" activeClassName={s.active}>
              <img src="/img/bag.svg" alt="Cart" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
