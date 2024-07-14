import React, { useState } from 'react';
import { CiCamera } from 'react-icons/ci';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoMdSearch } from 'react-icons/io';
import './ContactoHeader.css';
import FormBusquedaDeContactos from '../FormBusquedaDeContactos/ContactoForm';

export const ContactoHeader = ({ search, onSearchChange }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);  
  };

  return (
    <div className={`contact-header ${searchVisible ? 'search-visible' : ''}`}>
      {searchVisible && (
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

