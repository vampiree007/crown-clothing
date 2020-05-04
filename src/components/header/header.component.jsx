import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/original.svg';
import {auth} from '../../firebase/firebase.utilities.js';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop"> SHOP </Link>
            <Link className="option" to="/Contact"> CONTACT </Link>
            {
                currentUser? (
                    <div className="option" onClick={()=>{auth.signOut()}} >SIGN OUT</div>
                )
                : (
                    <Link className="option" to="/authentication"> LOGIN </Link> 
                )
            }
        </div>
    </div>
)

export default Header;