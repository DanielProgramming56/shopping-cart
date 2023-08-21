function removeFromCart(itemId,cartItems,setCartItems) {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
}

export default removeFromCart