import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route
              exact
              path="/ShoppingCart"
              render={ (props) => (<ShoppingCart { ...props } />) }
            />
            <Route
              path="/product-detail/:categoryId/:id"
              render={ (props) => <ProductDetails { ...props } /> }
            />
            <Route exact path="/checkout" component={ Checkout } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
