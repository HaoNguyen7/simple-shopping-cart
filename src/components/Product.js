import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../redux/cart'
import './Product.css'
const Product = (props) => {
  const [quantity, setQuantity] = useState(1)
  const product = props.product
  const dispatch = useDispatch()
  return (
    <div className="card">
      <img src={product.image} alt="Avatar" style={{ width: 200, height: 200 }} />
      <div className="container">
        <h4><b>{product.title}</b></h4>
        <h4><b>$ {product.price}</b></h4>
        <div style={{ marginTop: 10 }}>
          <input type="button" onClick={() => setQuantity(quantity - 1)} value="-" className="minus" />
          <input type="number" step="1" min="1" max="" name="quantity" value={quantity} title="Qty" className="input-text qty text" size="4" pattern="" inputMode="" />
          <input type="button" onClick={() => setQuantity(quantity + 1)} value="+" className="plus" />
        </div>
        <button onClick={() => dispatch(addItemToCart({product,quantity}))}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Product