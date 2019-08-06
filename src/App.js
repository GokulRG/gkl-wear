import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
