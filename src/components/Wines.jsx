import React from 'react'
import '../assets/css/Wines.css'
import a from '../assets/static/1.png'
import b from '../assets/static/2.png'
import c from '../assets/static/3.png'
import d from '../assets/static/4.png'
import naranjo from '../assets/static/naranjo.png'
export default function Wines() {
  return (
    <div>
      <div className="wines-container">
        <div className="wines-card">  
        <img src={naranjo} alt="" />
          <div className="wines-txt-card">
             <h3>2020</h3>
           <h1>Naranjo</h1>
           <h2>Corte de Torrontés (50%) con de Sauvignon Blanc y Chardonnay cofermentados.<br></br>Acero inoxidable y barrica de tercer uso. Contacto con pieles durante 4 meses. Levaduras nativas.Sin filtrar.<br></br> Alcohol: 12,5%</h2>
           <button className='btn-wines'>Ver más</button>
          </div>
      
        </div>
        <div className="other-wines"> 
          <div className="other-container">
             <div className="other-card">
              <img src={a} alt="" />
          <h2>ROSADO PRIMERO</h2>
          </div> 
          <div className="other-card">
          <img src={d} alt="" />
          <h2>PINTÓ VERDOT</h2>
          </div>
          <div className="other-card">
          <img src={b} alt="" />
          <h2>PIELIHUESO BLANCO</h2>
          </div>
          <div className="other-card">
          <img src={c} alt="" />
          <h2>VINO DE SEÑOR</h2>
          </div>
         
          </div>
         
        
        </div>
      </div>
    </div>
  )
}
