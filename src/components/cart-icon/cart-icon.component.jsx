import React from 'react';
//Whenever you bind/trigger an action to be called on the click of a button or something. This is what you do.
//You import connect and you import the particular action that you want triggered
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

const mapStateToProps = ({ cart: { cartItems } }) => {
    return {
        //Reduce function is native to JS. It's used to iterate through a collection and return a single value
        //after going through all the values in the collection. The second argument 0 is the initial value of the accumulator.
        //A callback function is the first argument, that takes in the value that has been accumulated up until now as the first arg and the current value as the second arg.
        itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => {
            return accumulatedQuantity + cartItem.quantity;
        }, 0)
    };
};

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
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);