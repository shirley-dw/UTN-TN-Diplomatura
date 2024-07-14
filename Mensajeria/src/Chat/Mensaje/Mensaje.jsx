import React from 'react'; /* Importo a react */
import './Mensaje.css';  /* importo css */

export const Mensaje = ({ mensaje, contacto }) => { /* Define componente Mensaje que recibe dos props: mensaje y contacto */
  const { author, text, status, day, hour } = mensaje;/*  Desestructura el objeto mensaje en varias variables author, text, status, day y hour */
  const isAuthor = author === 'yo'; /* isAuthor indica si el autor del mensaje es el usuario actual */
    return ( 
        <div className="content" style={{ justifyContent: isAuthor ? 'flex-end' : 'flex-start' }}>{/* Operador ternario verifica si es auto o no para cumplir las condiciones  de estilos */}
        <div className="mensaje" style={{ backgroundColor: isAuthor ? '#D9FDD3' : '#FFFFFF' }}>
          <p className="text">{text}</p>
        <div className="content-lower">
          <span className="timeSince">{`${day} ${hour}`}</span>
          <span className="timeSince">{status}</span>
        </div>
      </div>
    </div>
  );
};


export default Mensaje;