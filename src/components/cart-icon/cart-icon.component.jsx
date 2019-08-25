import React from 'react';
//Whenever you bind/trigger an action to be called on the click of a button or something. This is what you do.
//You import connect and you import the particular action that you want triggered
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ( {toggleCartHidden} ) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}

//After importing the connect and the action that you want to trigger, you define a mapDispatchToProps function
//The mapDispatchToProps is simple, It just dispatches an action. So since you imported the action that you 
//wanted to dispatch, simply call dispatch on the action
//This toggleCartHidden is the name in which you'll receive the props.
const mapDispatchToProps = (dispatch) => {
    return {
        //This means that a function is passed. So whenever someone clicks a button on something. The click happens when
        //this toggleCartHidden is referenced.
        toggleCartHidden: () => dispatch(toggleCartHidden())
    };
};

//null is the first arg, because that place is reserved for mapStateToProps,
//second arg is mapDispatchToProps.
export default connect(null, mapDispatchToProps)(CartIcon);