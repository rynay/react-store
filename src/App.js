import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './components/Pages/Cart';
import Products from './components/Pages/Products';
import Starter from './components/Pages/Starter'

import { store } from './store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Starter />
        </Route>
        <Route path="/products/:category?">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Provider>
    
  );
}

export default App;
