import React from 'react'
import '../assets/css/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
    <>
 <nav role="navigation">
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
    <Link to="/about" className='text-link'>NOSOTROS</Link>
    <Link to="/wines" className='text-link'>VINOS</Link>
    <Link to="/stories" className='text-link'>CRÓNICAS</Link>
    <Link to="/team" className='text-link'>EQUIPO</Link>
    <Link to="/contact" className='text-link'>CONTACTO</Link>
    </ul>
  </div>
</nav>

     </>
    )
}
