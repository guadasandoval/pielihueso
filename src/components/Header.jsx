import React from 'react'
import { Link } from 'react-router-dom'
import './../assets/css/Header.css'
import { ReactComponent as Logo } from '../assets/static/pielihueso.svg'
import Navbar from './Navbar'

export default function Header() {
  return (
    <>
    <div className="header-container">
      <Link to='/'><Logo className='header-logo'></Logo></Link>
      <Navbar></Navbar>
    </div>
    
    </>
  )
}
