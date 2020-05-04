import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/collection-page/shop.component';
import Header from './components/header/header.component';
import AuthenticationPage from './pages/authentication/authentication.component'
import {auth} from './firebase/firebase.utilities';


class App extends React.Component{
 constructor(){

  super();

  this.state = {
     currentUser : null,
  }
 }

 unsubscribeFromAuth = null;

 componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
     this.setState({currentUser: user});
     //console.log(user)
   })
 }

 componentWillUnmount() {
   this.unsubscribeFromAuth();
 }

 render(){
  return (
    <div className='app'>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/authentication' component={AuthenticationPage} />
      </Switch>
    </div>
  );

 }
}

export default App;
