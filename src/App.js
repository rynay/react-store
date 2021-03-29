import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './components/Pages/Cart';
import Products from './components/Pages/Products';
import ProductPage from './components/Pages/Products/ProductPage';
import Banner from './components/Banner';

import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Banner title="Think Different" />
        </Route>
        <Route exact path="/products/:category?">
          <Products />
        </Route>
        <Route exact path="/product/:id?">
          <ProductPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
