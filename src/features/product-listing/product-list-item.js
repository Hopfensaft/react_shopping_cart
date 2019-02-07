import React from 'react'
import AddButton from './add-btn'
import RemoveButton from './remove-btn'

export default function ProductListItem(props) {
    return <div className='product-list-item'>
        <h3>{ props.product.name }</h3>
        <h4> GBP { props.product.price.toFixed(2) }</h4>
        <div>
            <AddButton
                cartItem={props.cartItem}
                product={props.product}
                addToCart={props.addToCart}
            />

            {
                props.cartItem
                ? <RemoveButton
                        cartItem={props.cartItem}
                        product={props.product}
                        removeFromCart={props.removeFromCart}
                    />
                : null
            }
        </div>
    </div>
}