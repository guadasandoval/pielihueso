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
    <Link to="/about" className='text-link'>01.Nosotros</Link>
    <hr className='nav-hr'/>
    <Link to="/wines" className='text-link'>02.Vinos</Link>
    <hr className='nav-hr'/>
    <Link to="/stories" className='text-link'>03.Crónicas</Link>
    <hr className='nav-hr'/>
    <Link to="/team" className='text-link'>04.Equipo</Link>
    <hr className='nav-hr'/>
    <Link to="/contact" className='text-link'>05.Contacto</Link>
    </ul>
  </div>
</nav>

     </>
    )
}
