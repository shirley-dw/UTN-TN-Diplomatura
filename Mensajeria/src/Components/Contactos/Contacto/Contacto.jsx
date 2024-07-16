import React from "react"; /* importo react */
import { Link } from "react-router-dom";/* Importo link de react dom */
import "./Contacto.css";/* Importo css */


export const Contacto = ({ contacto }) => { /* Componente Contacto le paso props contacto */
  const { ID, nombre, thumbnail , mensajeID} = contacto/* Desestructuro la props contacto */
  const imgSrc = '/Imagenes/' + thumbnail /* Variable imgSrc con valor de imagenes[thumbnail] definIDa en Contactos */


    
    const lastMessage = mensajeID[mensajeID.length - 1] /* Ultimo mensaje en el array mensajeID */
    const horaUltimoMensaje = lastMessage?.hora/* Hora del ultimo mensaje */

  return (/* Return devuelve elementos JSX. */
    <Link className="contact-link" to={`/mensaje/${ID}`}>
    <div key={ID} className="contact-item">{/* Link react-router-dom crea un enlace que lleva a una ruta específicada con to la URL a la que debe dirigir el enlace en él que concatena la cadena /mensaje/con el valor de la variable. */}
      <img src={imgSrc} alt={nombre}  className="img"/>
      <div className="dato">
        <p className="name">
          <strong>{nombre}</strong>
        </p>
        </div>
      <div className="time">{horaUltimoMensaje}</div>
    </div>
    </Link>
  )
}
