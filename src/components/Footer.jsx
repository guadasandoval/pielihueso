import React from 'react'
import '../assets/css/Footer.css'
import { ReactComponent as FooterSvg } from '../assets/static/footer.svg'
import { ReactComponent as Logo } from '../assets/static/pielihueso.svg'

export default function Footer() {
  return (
    <>
      <div className="footer-container">
          <FooterSvg className='footer-svg'></FooterSvg>
          <div className="footer-center">
            <Logo className='footer-logo' fill='#fff'></Logo>
          <p>Los Chacayes y Los Sauces, Valle de Uco</p>
          </div>
          
      </div>
    </>
  )
}
