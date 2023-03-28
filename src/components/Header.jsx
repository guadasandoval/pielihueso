import React from 'react'
import { Link } from 'react-router-dom'
import './../assets/css/Header.css'
import { ReactComponent as Logo } from '../assets/static/pielihueso.svg'


export default function Header() {
  return (
    <>
    <div className="header-container">
      <Link to='/'><Logo className='header-logo'></Logo></Link>
      <div className="nav-pages">
        <Link to="/about" className='text-link'>Nosotros</Link>
        <Link to="/wines" className='text-link'>Vinos</Link>
        <Link to="/stories" className='text-link'>Crónicas</Link>
        <Link to="/contact" className='text-link'>Contacto</Link>
      </div>
    </div>
    
    </>
  )
}
