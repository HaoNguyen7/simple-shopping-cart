import React from 'react'

import './Product.css'
import CartItem from './CartItem'
function Cart({ cartItems, decreaseQuantity, increaseQuantity, removeItem, clearCart }) {
  const getTotalPrice = (cartItems) => {
    return cartItems.reduce((total,cartItem) => {
          return cartItem.totalPrice + total
      },0);
    }
  return (
    <div>
        <h1>Cart</h1>
        <h2>Total: {getTotalPrice(cartItems)}$</h2>
        <CartItem items = {cartItems} 
          increaseQuantity={increaseQuantity} 
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem} />

        <button onClick={() => clearCart()}>Xóa hết</button>
    </div>
  )
}

export default Cart