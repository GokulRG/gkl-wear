export const addItemToCart = (existingItems, cartItemToAdd) => {
    const existingCartItem = existingItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return existingItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...existingItems, { ...cartItemToAdd, quantity: 1 }];

}