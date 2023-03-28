import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import '../assets/css/Wines.css'
import a from '../assets/static/1.png'
import b from '../assets/static/2.png'
import c from '../assets/static/3.png'
import d from '../assets/static/4.png'
import  Vino from '../assets/static/naranjo.png'

export default function Wines() {
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
             <div className="other-card">
              <div className="center-img">
                 <img src={a} alt="" />
              </div>
             
          <div className="card-info">
                <div className="card-txt">
            <h2>Rosado Primero</h2> 
            <h3>ARS$2000</h3>
            </div> 
            <FaCartPlus className='icon' />
          </div>
          </div>

          <div className="other-card">
            <div className="center-img">
              <img src={d} alt="" />
            </div>
          <div className="card-info">
               <div className="card-txt">
            <h2>Pintó Verdot</h2>
            <h3>ARS$2300</h3>
          </div>
          <FaCartPlus className='icon' />
          </div>
          </div>
          <div className="other-card">
            <div className="center-img">
               <img src={b} alt="" />
            </div>
          <div className="card-info">
              <div className="card-txt">
            <h2>Pielihueso Blanco</h2>
          <h3>ARS$2500</h3>
          </div>
          <FaCartPlus className='icon'/>
          </div>
          </div>
          <div className="other-card">
            <div className="center-img">
              <img src={c} alt="" />
            </div>
          <div className="card-info">
               <div className="card-txt">
            <h2>Vino de Señor</h2>
            <h3>ARS$3100</h3>
          </div>
          <FaCartPlus className='icon'/>
          </div>
          </div>
         
          </div>
         
        
        </div>
      </div>
    </div>
  )
}
