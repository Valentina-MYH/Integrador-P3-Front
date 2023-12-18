import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({ products, fetchProductsData }) => {
    console.log(products) ; 
  return (
    <>
      <div className="card">
        {products.map((product)=>(
                <ProductCard 
                key={product.id}
                product={product} 
                fetchProductsData={fetchProductsData}/>
            ))}
      </div>
    </>
  )
}

export default ProductList