//Importo librerias
import React from 'react'
//Importo estilos
import './NavBar.css'
const NavBar = () => {
    return (
        <nav className='NavBar'>
            <ul class="navigate">
            <li className='nav-items'><a href="#Empresa">Empresa</a></li>
            <li className='nav-items'><a href="#Testimonios">Testimonios</a></li>
            <li className='nav-items'><a href="#Service">Servicios</a></li>            
        </ul>
                <button className='btn-contact'>Contacto</button>
            
        </nav>
    )
}

export default NavBar