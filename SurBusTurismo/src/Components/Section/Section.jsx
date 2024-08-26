//Importo librerias
import React from 'react'
//Importo estilos
import './Section.css'
// Importo componentes
const Section = () => {
  return (
    <main className='section'>
      <div className='section-container'>
        <h1 className='title'>Sur Bus Turismo</h1>
        <span className='description'>Nuestras prinicipales caracteristicas</span>
        <ul className='data' for='about'>
   <li class="aptitudes">Puntualidad</li>
   <li class="aptitudes">Seguridad</li>
   <li class="aptitudes">Honestidad</li>
   <li class="aptitudes">Responsabilidad</li>
   <li class="aptitudes">Profesionalismo</li>
   <li class="aptitudes">Compromiso</li>
   <li class="aptitudes">Respeto</li>
   <li class="aptitudes">Confort</li>
</ul>
        <img src="./imagenes/lateralsprinter.jpeg" alt="" className='combi' />
      </div>
    </main>
  )
}

export default Section