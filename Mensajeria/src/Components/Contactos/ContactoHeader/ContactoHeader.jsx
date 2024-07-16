import React, { useState } from 'react'/* Importo react + useState */
import { CiCamera } from 'react-icons/ci'/* Importo icono camara */
import { BsThreeDotsVertical } from 'react-icons/bs'/* Import icons */
import { IoMdSearch } from 'react-icons/io'/* Import icons */
import './ContactoHeader.css';/* Import css */
import FormBusquedaDeContactos from '../FormBusquedaDeContactos/ContactoForm.jsx'; /* Importo form de busqueda */

export const ContactoHeader = ({ search, onSearchChange }) => {/*  Function contacto Header con prop "Search y onSearchChange" */
  const [searchVisible, setSearchVisible] = useState(false);/* Inicio estado en false */

  const handleSearchClick = () => {/* Function handleSearchClick */
    setSearchVisible(!searchVisible) /* La instacion y digo que cuando sea diferente se ejecute */
  }

  return ( /* Return elementos JSX */
    <div className={`contact-header ${searchVisible ? 'search-visible' : ''}`}>{/* Operador ternario */}
      {searchVisible && (
        <FormBusquedaDeContactos /* Paso las props a FormBusquedaDeContactos */
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

