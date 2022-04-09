import React, {useEffect} from 'react'
import './Product.css'
import Product from './Product'
const Products = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts()
  },[])
  return (
    <div className='table'>
            {products.map((product) => (
                <Product key={product.id} product={product}  />
            ))}
    </div>
  )
}

export default Products