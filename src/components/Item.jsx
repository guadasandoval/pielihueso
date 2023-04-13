import React from 'react'
import '../assets/css/Item.css'
import { FaCartPlus } from 'react-icons/fa';
import { useContext } from 'react';
import Contexto from '../context/Contexto';

export default function Item(props) {
    const {id, name, price, img} = props
    const {setCart} = useContext(Contexto)
   
  return (
    <>  
    <div className="other-card">
        <div className="center-img">
            <img src={img} alt="" />
        </div>
    <div className="card-info">
        <div className="card-txt">
            <h2>{name}</h2> 
            <h3>ARS${price}</h3>
        </div> 
        <FaCartPlus className='icon' onClick={()=>{setCart(id)}}/>
    </div>
    </div>
</>
  )
}
