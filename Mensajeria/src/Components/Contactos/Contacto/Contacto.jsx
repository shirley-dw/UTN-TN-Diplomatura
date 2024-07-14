import React from "react"; /* importo react */
import { Link } from "react-router-dom";/* Importo link de react dom */
import "./Contacto.css";/* Importo css */
import '../../../mensajeria.json'/* Importo archivo mensajeria.json */

export const Contacto = ({ contacto }) => { /* Componente Contacto le paso props contacto */
  const { id, nombre, thumbnail , mensajes} = contacto/* Desestructuro la props contacto */
  const imgSrc = imagenes[thumbnail] /* Variable imgSrc con valor de imagenes[thumbnail] definida en Contactos */


    
    const lastMessage = mensajes[mensajes.length - 1] /* Ultimo mensaje en el array mensajes */
    const horaUltimoMensaje = lastMessage?.hora/* Hora del ultimo mensaje */

  return (/* Declaración de retorno, devuelve elementos JSX. */
    <Link className="contact-link" to={`/mensaje/${id}`}>
    <div key={id} className="contact-item">{/* Link react-router-dom crea un enlace que lleva a una ruta específicada con to la URL a la que debe dirigir el enlace en él que concatena la cadena /mensaje/con el valor de la variable. */}
      <img src={imgSrc} alt={nombre} />
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
