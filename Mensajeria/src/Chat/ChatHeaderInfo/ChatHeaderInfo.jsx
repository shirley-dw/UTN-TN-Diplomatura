import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ChatHeaderInfo.css';
/* Import imagenes */
/* import {Imagenes} from '/Imagenes'; */
/* Importo contactos */
import { ObtenerContactos } from "../../Fetching/contactosFetching";
/* icons importados de libreria React-icons */
import { SlArrowLeft } from "react-icons/sl";
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdPhone } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

/*  Define un componente llamado ChatHeaderInfo y lo exporta para ser usado en otros archivos.
 El componente devuelve un elemento div con la clase chat-header-info,(Contiene el encabezado de la pantalla de chat */

const ChatHeaderInfo = () => {
  const { id } = useParams();
  const [contactos, setContactos] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    ObtenerContactos()
      .then((contactos) => {
        setContactos(contactos);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error al obtener contactos:", error);
        setLoading(false);
      });
  }, []);

  const dataContacto = contactos.find((contacto) => contacto.id === Number(id));

  if (loading) {
   console.log('Cargando')
  }
  else
  {

  return (
    <div className="chat-header-info">
      <div className="contacto">
        <Link to="/">
          <SlArrowLeft className="arrow" />
        </Link>
        <img className="fotoperfil" src={'/Imagenes/'+ dataContacto.thumbnail} alt="Foto perfil" />
        <div className="chat-header">
          <div className="profile-name">{dataContacto.nombre}</div>
          <div className="status-text">{dataContacto.ultima_conexion}</div>
        </div>
      </div>
      <div className="icons">
        <GoDeviceCameraVideo />
        <MdPhone />
        <IoMenu />
      </div>
    </div>
  );
};
}
export default ChatHeaderInfo;
