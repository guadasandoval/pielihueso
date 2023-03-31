import React from 'react'
import { useContext, useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import '../assets/css/Wines.css'
import  Vino from '../assets/static/naranjo.png'
import Contexto from '../context/Contexto';
import Item from './Item.jsx'

export default function Wines() {
  const {getProducts, products} = useContext(Contexto)
  useEffect(()=>{
    getProducts()
  },[])
 
  return (
    <div>
      <div className="wines-container">
       
        <div className="wines-card">  
          <div className="wines-txt-card">
           <h1>Vinos de familia Valle de Uco</h1>
         <img src={Vino} alt="" className='order-img'/>
          </div>
        </div>
        <div className="other-wines">
             <h1>Nuestros vinos</h1>
          <div className="other-container">
            {products.map((item)=>(
              <Item {...item} key={item.id}></Item>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
