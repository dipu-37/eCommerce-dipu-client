import React from 'react'
import Header from '../components/ui/Header'
import Products from '../components/ui/Product'

const AllProducts = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <h2 className="text-2xl font-medium md:text-3xl text-gray-800 mb-4 mt-8">All Products</h2>
      <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      <Products></Products>
    </div>
  )
}

export default AllProducts
