import React from 'react'
import '../assets/css/Item.css'
import { FaCartPlus } from 'react-icons/fa';
import a from '../assets/static/1.png'
import b from '../assets/static/2.png'
import c from '../assets/static/3.png'
import d from '../assets/static/4.png'
import { useContext } from 'react';
import Contexto from '../context/Contexto';

export default function Item(props) {
    const {id, name, price} = props
    const {setCart} = useContext(Contexto)
    var imgSrc
    switch(id){
        case "1":
            imgSrc = a
        break
        case "2":
            imgSrc = b
        break
        case "3":
            imgSrc = c
        break
        case "4":
            imgSrc = d
        break
    }

   
  return (
    <>  
    <div className="other-card">
        <div className="center-img">
            <img src={imgSrc} alt="" />
        </div>
    <div className="card-info">
        <div className="card-txt">
            <h2>{name}</h2> 
            <h3>{price}</h3>
        </div> 
        <FaCartPlus className='icon' onClick={()=>{setCart(id)}}/>
    </div>
    </div>
</>
  )
}
