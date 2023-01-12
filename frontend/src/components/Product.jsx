import React from 'react'
import { useLocation } from 'react-router-dom'
const Product = () => {
  const location = useLocation() 
  const product = location.state
  return (
    <div>
      <h1>
        {product.name}
      </h1>
    </div>
  )
}

export default Product