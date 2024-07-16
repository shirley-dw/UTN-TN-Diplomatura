import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  Mensaje  from "../Mensaje/Mensajes.jsx";
import './ListaMensajes.css';
import {ObtenerMensajes} from '../../Fetching/mensajesFetching.js'

const ListaMensajes = ({ mensaje }) => {
  const { mensajeID} = useParams();
  const [mensajesIniciales, setMensajesIniciales] = useState([]);

  // Carga mensajes almacenados en el JSON
  useEffect(() => {
    const contacto = ObtenerMensajes.find(contacto => contacto.id === parseInt(contactoID));
      setMensajesIniciales(contacto.mensajes);
  }, []);

  // Agrega el mensaje nuevo
  useEffect(() => {
    if (mensaje) {
      setMensajesIniciales(mensajesPrevios => [...mensajesPrevios, mensaje]);
    }
  }, [mensajeID]);

  return (
    <div className="mensaje-container">
      {mensajesIniciales.map((msj, index) => (
        <Mensaje mensaje={msj} key={`${contactoID}.${msj.id}.${index}`} />
      ))}
    </div>
  );
}

export default ListaMensajes;