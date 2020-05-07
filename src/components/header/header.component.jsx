import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/original.svg';
import {auth} from '../../firebase/firebase.utilities.js';
import { connect } from 'react-redux';
import CartIcon from '../cart/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop"> SHOP </Link>
            {
                currentUser? (
                    <div className="option" onClick={()=>{auth.signOut()}} >SIGN OUT</div>
                )
                : (
                    <Link className="option" to="/authentication"> LOGIN </Link> 
                )
            }
            <CartIcon/>
            {
                hidden? <CartDropDown/> : null 
            }
        </div>
        
        
    </div>
)
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header);