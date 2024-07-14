import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return  (
        <header>
            <h2>Hola desde mi primer e-commerce con react router dom</h2>
            <nav>
                <NavLink to={'./contact'}>Contacto</NavLink> 
                <NavLink to={'./cart'}>Carrito</NavLink> {/* Utilizo "to" y / Para que me redireccione al link */}
                <NavLink to={'./details'}>Detalles</NavLink> {/* Utilizo "to" y / Para que me redireccione al link */}
                
            </nav>
        </header>
    )
}

export default Navbar