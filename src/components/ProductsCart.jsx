import React from 'react'
import '../assets/css/ProductsCart.css'
import señor from '../assets/static/1.png'

export default function ProductsCart() {
 
  let cantidad = 0
  let total = 0
  return (
    <>
  
    <hr/>
        <div className="item-cart">
          <div className="product-cart">
             <div className="item-cart-img">
                 <img src={señor} alt="" />
            </div>
           
            <div className="item-cart-txt">
                <p>Vino señor</p>
                <p>mini descripcion</p>
               
            </div> 
          </div>
           
            <div className="button-17" role="button">
                  <button>-</button>
                  {cantidad}
                  <button>+</button>
            </div>
            ARS${total}
        </div>
      
    </>
  )
}
