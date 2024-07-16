/* importo react/ Link /CSS/ Imagenes */
import React from "react";
import { Link } from "react-router-dom";
import "./Contacto.css";


/* Componente Contacto le paso props contacto */
export const Contacto = ({ contacto }) => {
  /* Desestructuro la props contacto */
  const { id, nombre, thumbnail, mensajes,  ...mensaje } = contacto
  const Imagenes = '/Imagenes/' + thumbnail /* Variable imgSrc con valor de imagenes[thumbnail] definida en Contactos */

  const ultimoMensaje= mensajes[mensajes.length - 1] /* Ultimo mensaje en el array mensajeID */
  const horaUltimoMensaje = ultimoMensaje?.hour/* Hora del ultimo mensaje */

  return (/* Return devuelve elementos JSX. */
    <Link className="contact-link" to={`/mensaje/${id}`}>
      <div key={id} className="contact-item">{/* Link react-router-dom crea un enlace que lleva a una ruta específicada con to la URL a la que debe dirigir el enlace en él que concatena la cadena /mensaje/con el valor de la variable. */}
        <img src={Imagenes} alt={nombre} className="img" />
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

export default Contacto;