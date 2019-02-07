import React from 'react'
import ProductListItem from './product-list-item'
import { connect } from 'react-redux'
import { cartItemsWithQuantity } from '../cart'

const products = [
    {
        name: 'Sledgehammer',
        price: 125.75
    },{
        name: 'Axe',
        price: 190.50
    },{
        name: 'Bandsaw',
        price: 562.13
    },{
        name: 'Chisel',
        price: 12.9
    },{
        name: 'Hacksaw',
        price: 18.45
    }
]

function ProductListing(props) {
    return <div className='product-listing'>
        {
            products.map(product =>
                <ProductListItem
                    product={product}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                    cartItem={props.cart.filter(cartItem => cartItem.name === product.name)[0]}
                /> )
        }
    </div>
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)