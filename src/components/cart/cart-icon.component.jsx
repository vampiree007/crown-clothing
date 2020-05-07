import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as CartLogo } from '../../assets/cart-icon.svg';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
        <CartLogo className="shopping-icon"/>
        <div className="item-count">0</div>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);