import React  from 'react'/* Importo react */
import './ContactoForm.css'/* importo css */

function FormBusquedaDeContactos({ search, onSearchChange }) { /* Function formdebusqueda con prop "search y onSearchChange" */
  const handleChange = (event) => { /* function "HandleChange" le paso un evento  */
    if (typeof onSearchChange === 'function') {/* Condicion if cuando onSearchChange sea estricta igualdad a function */
      onSearchChange(event.target.value) /* Devuelve la busqueda */
    } else {/* Condicion si onSearchChange no es estrictamente igual a function */
      console.error('onSearchChange no es una función');
    }
  }

  return (/* Retorno de elementos JSX */
    <>
    <form className="form-search">{/* Formulario */}
      <input /* Input del form */
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
        value={search}
      />
    </form>{/* Cierro el form */}
    </>
  );
}

export default FormBusquedaDeContactos