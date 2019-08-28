import React from 'react';
import './collection-item.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';
import CustomButton from '../custom-button/custom-button.component';

//Notice that now we get addItem function as a prop
const CollectionItem = ({ item, addItem }) => {
    
    const {imageUrl, id, name, price} = item;
    
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div key={id} className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            {/* Here we can see that when button is clicked it calls the addItem function that was created by mapDispatchToProps passing in the item*/}
            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    //addItem: means we are creating a prop here called addItem, This will go as a prop to the CollectionItem component
    //If you see this prop is a function. So after this statement, we get a function in the prop of CollectionItem called addItem
    //This function receives an item as the property. Passes that into the addItem action creator and we get the response with type as 'ADD_ITEM'
    //and payload with the item added to the list of items and then finally we dispatch that result to the store.
    return { addItem: item => dispatch(addItem(item))}
}

export default connect(null, mapDispatchToProps)(CollectionItem);