import React from 'react'
import ProductListing from '../features/product-listing'
import products from '../features/product-listing'

export default function HomePage(props) {
    return <div>
        <h2>
            Homepage
        </h2>
        <ProductListing products={products} />
    </div>
}