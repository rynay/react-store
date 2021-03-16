import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './components/Pages/Cart';
import Products from './components/Pages/Products';
import Starter from './components/Pages/Starter'

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/">
        <Starter />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
    </>
  );
}

export default App;
