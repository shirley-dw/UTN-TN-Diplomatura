import React  from 'react';
import './ContactoForm.css';

function FormBusquedaDeContactos({ search, onSearchChange }) {
  const handleChange = (e) => {
    if (typeof onSearchChange === 'function') {
      onSearchChange(e.target.value);
    } else {
      console.error('onSearchChange no es una función');
    }
  }

  return (
    <>

    <form className="form-search">
      <input
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
        value={search}
      />
    </form>
    </>
  );
}

export default FormBusquedaDeContactos;