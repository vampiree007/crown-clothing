import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/collection-page/shop.component';
import Header from './components/header/header.component';
import AuthenticationPage from './pages/authentication/authentication.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utilities';


class App extends React.Component{
 constructor(){

  super();

  this.state = {
     currentUser : null,
  }
 }

 unsubscribeFromAuth = null;

 componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged( async(userAuth) => {
      if(userAuth){
        const userRef =  await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            }, 
            //second function in set.state parameter to console aync function
            () => {
              //console.log(this.state.currentUser)
            }
          )
        });
      } else{
        this.setState({currentUser : userAuth})
      }
      
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
