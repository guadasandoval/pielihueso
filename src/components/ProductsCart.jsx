import React, {useState} from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import '../assets/css/ProductsCart.css'
import Contexto from '../context/Contexto'


export default function ProductsCart(props) {
  const {deleteCart} = useContext(Contexto)
  const {id, name, description, price, date, img} = props[0]
  const [total, setTotalProd] = useState(0)
  const [cantidadFinal, setCantidadProd] = useState(0)
  
  let tbodyCarrito = document.getElementById('tbodyCarrito')
  const calcularTotalProd =(cantidadFinal)=>{
    
    let totalProd = price
    totalProd = cantidadFinal*price
    console.log("totalProd1");
    setTotalProd(totalProd)
  }

  if (tbodyCarrito != null){
      tbodyCarrito.addEventListener('click', e => {
  if(e.target.type === 'button') {
      aumentarDisminuir(e.target)
    }
   })
  }
  const aumentarDisminuir = ((boton) => {
    if(boton.textContent === 'prueba+'){
      setCantidadProd(cantidadFinal+1)
    }
    if(boton.textContent === 'prueba-') {
      if(cantidadFinal != 0){
        setCantidadProd(cantidadFinal-1)
      } else{
        deleteCart(id)
      }
      
    }
  })
  //useEffect(()=>{calcularTotalProd(cantidadFinal)},[])
  //calcularTotalProd(cantidadFinal)
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
          <div id ="tbodyCarrito">
            <button type="button">prueba-</button>
           <button  type="button">prueba+</button>
          </div>
           
            <div id ="tbodyCarrito2" className="button-17">
                  <button>-</button>
                  {cantidadFinal}
                  <button>+</button>
            </div>
            ARS${total}
        </div>
      
    </>
  )
}
