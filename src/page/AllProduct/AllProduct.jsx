import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { productData } from '../../data/productData'

const AllProduct = () => {
  return (
    <div className='container-section'>
        <h2 class="text-3xl font-bold text-center mb-12">All Product</h2>
        <ProductCard products={productData}/>
    </div>
  )
}

export default AllProduct