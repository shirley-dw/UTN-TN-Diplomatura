//Importo librerias
import React from 'react'
//Importo estilos
import './Header.css'
// Importo componentes
import NavBar from '../NavBar/NavBar.jsx'

const Header = () => {
  return (
    <header className='header-container'>
        <div className='header-content'>
        <img src="./imagenes/logo.png" alt="" className='img'/>
        <NavBar/>
        </div>
        
    </header>
  )
}

export default Header