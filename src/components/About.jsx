import React from 'react'
import about from '../assets/static/about.png'
import '../assets/css/About.css'

export default function About() {
  return (
    <>
    <div className="about-container">
        <img src={about} alt="" />
      <div className="about-txt">
        <h1>Sobre pielihueso</h1>
      <p>Tenemos dos héctares y media en Los Chacayes con Malbec y Petit Verdot, y otras 13 hectáreas ahí cerca, en Los Sauces, con malbec y cabernet sauvignon de un hermoso parral de 70 años. Estamos plantando variedades nuevas también, pero eso es sorpresa.</p>
      </div>
    </div>
    <div className="more-txt">  
    <h1>EL VIÑEDO</h1>
      <div className="about-txt">
        <p>Trabajamos el viñedo de forma orgánica y con poca intervención en la bodega. Eso quiere decir, sacándole y agregándole los menos posible para que el vino sea jugo de uva fermentado.
      El trabajo que ponemos dentro de la botella también se traslada afuera. Nos gusta y divierte mucho trabajar en nuestra imagen como un proyecto de diseño y estética que sobreyace solamente el vino que hay adentro.</p>
      </div>
    </div>
    
      
    </>
  )
}
