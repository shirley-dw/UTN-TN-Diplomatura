import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Contacto } from "../../Contactos/Contacto/Contacto.jsx";
import "./ListaContactos.css"
import {ObtenerContactos }from '../../../Fetching/contactosFetching.js'
import {ObtenerMensajes} from '../../../Fetching/mensajesFetching.js'

export const ListaContactos = ({ search }) => {
  const [contactos, setContactos] = useState([]);
  const [mensajes, setMensajes] = useState([]); 
  const { contactoID } = useParams([]);
  const [contactosFiltrados, setContactosFiltrados] = useState([]);

  useEffect(() => {
    ObtenerContactos()
     .then((contactos) => {
        setContactos(contactos);
      })
     .catch((error) => {
        console.error("Error al obtener contactos:", error);
      });
  }, [contactoID]);

  useEffect(() => {
    ObtenerMensajes() 
     .then((mensajes) => {
        setMensajes(mensajes); 
      })
     .catch((error) => {
        console.error("Error al obtener mensajes:", error);
      });
  }, []);

  useEffect(() => {
    if (search) {
      setContactosFiltrados(
        contactos.filter((contacto) =>
          contacto.nombre?.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setContactosFiltrados(contactos);
    }
  }, [contactos, search]);

  return (
    <div className="contact-list">
      {contactosFiltrados.map((contacto) => (
        <Contacto key={contacto.ID} contacto={contacto} mensajes={mensajes} /> // Pass the messages as a prop
      ))}
    </div>
  );
};


/* 
.then((contactos) => {... }): Cuando la promesa devuelta por ObtenerContactos() se resuelve, se ejecuta la función  que se pasa como argumento a .then (RECIBE LA LISTA DE CONTACTOS COMO PARAMETRO CONTACTOS). 
· La función actualiza el estado contactos con la lista de contactos recibida utilizando setContactos(contactos).

---------------------------------------------------------------------------------------------------------------------------------------------------
.catch: Se utiliza para capturar y manejar errores que ocurran durante la ejecución de la promesa devuelta por ObtenerContactos(). Si ocurre un error, se muestra un mensaje de error en consola.
---------------------------------------------------------------------------------------------------------------------------------------------------

contacto.nombre?.toLowerCase().includes(search.toLowerCase()): Es la condicion de filtrado verifica si el nombre del contacto (conv' a minusc') contiene la cadena de busqueda search (conv' a minusc'). El operador ?. se usa para evitar errores de tipo "null" en caso de que el contacto no tenga un nombre.



*/