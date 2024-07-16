import React, { useState, useEffect } from 'react';
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../index.js';
import './ChatScreen.css';
import Pantalla from '../../Components/assets/pantalla.png';
import { useParams } from 'react-router-dom';

const ChatScreen = () => {
  const [mensajes, setMensajes] = useState([]);
  const [mensajesFiltrados, setMensajesFiltrados] = useState([]);
  const { mensajesID } = useParams();

  const obtenerMensajes = async () => {
    try {
      const response = await fetch('/mensajeria.json'); 
      const mensajes = await response.json();
      setMensajes(mensajes);
    } catch (error) {
      console.error("Error al obtener mensajes:", error);
    }
  };

  useEffect(() => {
    obtenerMensajes();
  }, [mensajesID]);

  useEffect(() => {
    if (search) {
      setMensajesFiltrados(
        mensajes.filter((mensaje) =>
          mensaje.nombre?.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setMensajesFiltrados(mensajes);
    }
  }, [mensajes, search]);

  const addMensaje = (mensajeNuevo) => {
    setMensajes([...mensajes, {
      author: 'yo',
      text: mensajeNuevo,
      estado: 'visto',
      day: 'hoy',
      hour: '11:18',
      id: mensajes.length + 1
    }]);
  };

  return (
    <>
      <ChatHeaderInfo />
      <div>
        <img src={Pantalla} alt="" className='pantalla' />
        <div className='chat'>
          <div className='ChatScreen'>
            <ListaMensajes lista={mensajesFiltrados} />
          </div>
          <MensajeForm submitMensaje={addMensaje} />
          <div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;
/* Resumen:  El componente ChatScreen define una pantalla de chat que muestra un encabezado, una lista de mensajes y un formulario para enviar nuevos mensajes. El estado mensajes se utiliza para almacenar la lista de mensajes y se actualiza cuando se agrega un nuevo mensaje. */
