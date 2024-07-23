import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ChatHeaderInfo.css';
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
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
  const [contacto, setContacto] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/contactInfo/${contacto.id}`);
  };

  useEffect(() => {
    ObtenerContactos()
     .then((contactos) => {
        console.log(contactos)
        const dataContacto = contactos.find((contacto) => contacto.id === Number(id));
        setContacto(dataContacto);
        setLoading(false);
      })
     .catch((error) => {
        console.log("Error al obtener contactos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="chat-header-info">
        <div className="contact">
          <Link to={`/mensajes/${contacto.id}`}>
            <SlArrowLeft className="arrow" />
          </Link>
          <Link to={`/contactInfo/${contacto}`}onClick={handleProfileClick}>
            <IoInformationCircleOutline className="info" />
          </Link>
          {
            contacto && <>
              <img className="fotoperfil" src={'/Imagenes/' + contacto.thumbnail} alt="Foto perfil" />
              <div className="chat-header">
                <div className="profile-name">{contacto.nombre}</div>
                <div className="status-text">{contacto.ultima_conexion}</div>
              </div>
            </>
          }
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
