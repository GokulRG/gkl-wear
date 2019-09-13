import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = (props) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    props.cartItems.map(cartItem => {
                        return <CartItem key={cartItem.id} item={cartItem} />
                    })
                }
            </div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { cartItems: state.cart.cartItems };
}

export default connect(mapStateToProps)(CartDropdown);

//Here's how you get data from the state when you're using Redux
//import connect from react-redux
//Then call map State To Props, this function takes an input of the current state, take whatever you want from it and return that as an object with a property. That particular property should now be available in the props for you
//Don't forget to wire the connect function during export default component.
//Use props to display your state data