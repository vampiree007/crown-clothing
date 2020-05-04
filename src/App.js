import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/collection-page/shop.component';
import Header from './components/header/header.component';
import AuthenticationPage from './pages/authentication/authentication.component'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/authentication' component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
