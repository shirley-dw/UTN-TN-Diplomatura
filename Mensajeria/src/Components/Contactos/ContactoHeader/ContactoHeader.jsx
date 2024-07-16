import React, { useState } from 'react'/* Importo react + useState */
import { CiCamera } from 'react-icons/ci'/* Importo icono camara */
import { BsThreeDotsVertical } from 'react-icons/bs'/* Import icons */
import { IoMdSearch } from 'react-icons/io'/* Import icons */
import './ContactoHeader.css';/* Import css */
import FormBusquedaDeContactos from '../FormBusquedaDeContactos/ContactoForm.jsx'; /* Importo form de busqueda */


/*  Function contactoHeader con props "Search y onSearchChange" */
const ContactoHeader = ({ search, onSearchChange }) => {
  const [searchVisible, setSearchVisible] = useState(false);/* Inicio estado en false */

  /* Function handleSearchClick */
  const handleSearchClick = () => {
    setSearchVisible(!searchVisible) /* La instacion y digo que cuando sea diferente se ejecute */
  }

  return ( 
    <div className={`contact-header ${searchVisible ? 'search-visible' : ''}`}>{/*  Si el estado es true, se ejecuta la clase search-visible */}
      {searchVisible && (
        /* Paso las props a FormBusquedaDeContactos */
        <FormBusquedaDeContactos 
          search={search}
          onSearchChange={onSearchChange}
        />
      )}
      <div className='logo'>WhatsApp</div>
      <div className='icons'>
        <CiCamera />
        <IoMdSearch onClick={handleSearchClick} />  
        <BsThreeDotsVertical />
      </div>
    </div>
  )
}

export default ContactoHeader
