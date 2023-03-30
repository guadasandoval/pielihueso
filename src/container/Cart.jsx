import React from 'react'
import "../assets/css/Cart.css"
import ProductsCart from '../components/ProductsCart'
export default function Cart(props) {
  const {cart, setCart} = props

  return (
    <>
    <div className="cart-container">
        <div className="cart-card">
        <div className="head-cart">
          <h2>PRODUCTOS</h2>
          <h2>CANTIDAD</h2>
          <h2>TOTAL</h2>
        </div>  
            <ProductsCart></ProductsCart>
            <ProductsCart></ProductsCart>
            <ProductsCart></ProductsCart>
            <hr />
        </div>
        
    </div>
    </>
  )
}
