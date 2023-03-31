import React, {useState} from 'react'
import { useEffect } from 'react'
import '../assets/css/ProductsCart.css'


export default function ProductsCart(props) {
  const {id, name, description, price, date, img} = props[0]
  const [total, setTotalProd] = useState(0)
  let cantidad = 1
  const calcularTotalProd =()=>{
  let totalProd = 0
   totalProd = cantidad*price
   setTotalProd(totalProd)
  }
  useEffect(()=>{calcularTotalProd()},[])
  return (
    <>
  
    <hr/>
        <div className="item-cart">
          <div className="product-cart">
             <div className="item-cart-img">
                 <img src={img} alt="" />
            </div>
           
            <div className="item-cart-txt">
              <p>{date}</p>
                <p>{name}</p>
                <p>{description}</p>
               
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
