
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import './ChatHeaderInfo.css'
/* Import imagenes */
/* import {Imagenes} from '../../../public/Imagenes'; */
/* Importo contactos */
import { ObtenerContactos } from "../../Fetching/contactosFetching";
/* icons importados de libreria React-icons */
import { SlArrowLeft } from "react-icons/sl";
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdPhone } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { Imagenes } from '../../../public/Imagenes';

/*  Define un componente llamado ChatHeaderInfo y lo exporta para ser usado en otros archivos.
 El componente devuelve un elemento div con la clase chat-header-info,(Contiene el encabezado de la pantalla de chat */
const ChatHeaderInfo = () => {
  const { contactoID } = useParams();
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    ObtenerContactos()
      .then((contactos) => {
        setContactos(contactos);
      });
  }, []);

  const contacto = contactos.find((contacto) => contacto.id === Number(contactoID));
  const imgSrc = Imagenes[contacto.thumbnail];

  return (
    <div className="chat-header-info">
      <div className="contacto"><Link to="/contactos"><SlArrowLeft className="arrow" /></Link>
        <img src={imgSrc} />
        <div className="chat-header">
          <div className="profile-name">{contacto.nombre}</div>
          <div className="status-text">Online</div>
        </div></div>
      <div className="icons">
        <GoDeviceCameraVideo />
        <MdPhone /><IoMenu />
      </div>
    </div>
  )
}

export default ChatHeaderInfo
