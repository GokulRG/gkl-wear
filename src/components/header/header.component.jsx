import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
//The connect that we import here is a higher order component, Meaning, its a function that takes in a component and returns a souped-up version of the component.
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/gkl-logo.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            <CartDropdown/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return ({
        //How is it state.user.currentuser? state refers to the root reducer. The root reducer has a user property, which refers to the userReducer. And the userReducer has the currentUser property. Just follow the chain.
        currentUser: state.user.currentUser
    });
};

export default connect(mapStateToProps)(Header);