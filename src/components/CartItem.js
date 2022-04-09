import React from 'react'

const CartItem = (props) => {
  return (
    props.items.map(item => {
        const cartItem = {
            id: item.productId,
            price: item.price
        }
        return(
            <>
                <h2>Tên sản phẩm: {item.productName}</h2>
                <h2>Số lượng: {item.quantity}</h2>
                <input type="button" onClick={() => props.decreaseQuantity(cartItem)} value="-" className="minus" />
                <input type="number" step="1" min="1" max="" name="quantity" value={item.quantity} title="Qty" className="input-text qty text" size="4" pattern="" readOnly />
                <input type="button" onClick={() => props.increaseQuantity(cartItem)} value="+" className="plus" />
                <h3>Số tiền: {item.totalPrice}</h3>
                <button onClick={() => props.removeItem(item.productId)}>Xóa</button>
            </>
        )
    })
  )
}

export default CartItem