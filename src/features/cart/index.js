import React from 'react'
import { connect } from 'react-redux'

function sort(items) {
    return items.sort((a, b) => a.name < b.name)
}

function Cart(props) {
    return <div>
        <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {
            sort(props.cart).map(item => <tr>
                <td>{ item.name }</td>
                <td>{ item.quantity }</td>
                <td>GBP { (item.price * item.quantity).toFixed(2) }</td>
                <td>
                    <button onClick={() => props.addToCart(item)}>+</button>
                    <button onClick={() => props.removeFromCart(item)}>-</button>
                </td>
                <td>
                    <button onClick={() => props.removeAllFromCart(item)}>Remove all</button>
                </td>
                </tr>)
        }
        </tbody>
    </table>
        <div><h2> Total: GBP {props.cart.length
            ? props.cart.reduce((acc, item) => (
            acc + item.price * item.quantity
            ), 0).toFixed(2) : Number(0).toFixed(2)}
        </h2></div>
    </div>
}

const Total = ({ cart }) => (
    <div className='cart-total'>
    <span className='cart-total-label'>
      Total:
    </span>
        <span className='cart-total-value'>
      ${cart.length ? cart.reduce((acc, item) => (
            acc + item.price * item.count
        ), 0).toFixed(2) : Number(0).toFixed(2)}
    </span>
    </div>
);

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item})
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)