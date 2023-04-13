import React from 'react'
import { useContext } from 'react'
import "../assets/css/Cart.css"
import ProductsCart from '../components/ProductsCart'
import Contexto from '../context/Contexto'

export default function Cart() {

  const {cart, deleteCart} = useContext(Contexto)

  return (
    <>
    <div className="cart-container">
        <div className="cart-card">
        <div className="head-cart">
          <h2>PRODUCTOS</h2>
          <h2>CANTIDAD</h2>
          <h2>TOTAL</h2>
        </div>  
            {cart.map((item, id)=>(
            <ProductsCart {...item} key={id}></ProductsCart>))}
            <hr />
        </div>
        
    </div>
    </>
  )
}
