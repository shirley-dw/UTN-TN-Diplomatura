import React from 'react'
import { useState } from 'react'
import './ContactScreen.css'
/* import { ContactoFooter, ContactoHeader, ListaContactos } from '../../components/Contactos/Contactos.jsx'; */
import { ContactoHeader } from '../../Components/Contactos/ContactoHeader/ContactoHeader.jsx'
import { ListaContactos } from '../../Components/Contactos/ListaContactos/ListaContactos.jsx'
import { ContactoFooter } from '../../Components/Contactos/ContactoFooter/ContactoFooter.jsx'
import '../../Components/assets/fondo.jpg'



const ContactScreen = () => { /* Función que devuelve JSX */
    const [search, setSearch] = useState('');/*  Uso el hook useState para crear un estado llamado search y una función setSearch para actualizar el estado. El estado search se inicializa con un valor vacío ('')*/
    console.log('hola')
    const handleSearchChange = (value) => {/* Función que maneja cambios en  estado search. La función toma de parámetro value, que es el nuevo valor que se asignará al estado search */
        setSearch(value)
    }/* . La función llama a setSearch con el value pasado como parámetro lo que actualiza el estado search */


    return (/* función handleSearchChange devuelve un JSX */
        <div className="contact-screens">{/* Div de ContactScreen */}
        
            <ContactoHeader search={search} onSearchChange={handleSearchChange} />{/* Paso las props correspondientes a los estados */}
            <ListaContactos search={search} />{/* Paso las props correspondientes a los estados */}
            <ContactoFooter />{/* Instancio el componente ContactoFooter */}
            <h1>Hola</h1>
        </div>
    )
}



export default ContactScreen
