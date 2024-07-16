/* Importo REACT/ UseEffect/ Router-dom/ CSS/ UseState */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  Mensajes  from '../Mensaje/Mensajes.jsx'
import './ListaMensajes.css'

/* Define un componente de React llamado ListaMensajes y lo exporta, define la props mensaje */

const ListaMensajes = ({ mensaje }) => {
  const { contactoID } = useParams()
  const [mensajeInicial, setMensajeInicial] = useState([])
  const [contacto, setContacto] = useState();
  // Msj del json
  useEffect(() => {
    fetch("/mensajeria.json")
      .then((response) => response.json())
      .then((data) => {
        const contactoEncontrado = data.find(
          (contacto) => contacto.id === Number(contactoID)
        );
        if (contactoEncontrado) {
          setContacto(contactoEncontrado);
          setMensajeInicial(contactoEncontrado.mensajes);
        }
      });
  }, [contactoID]);

  // New mensaje
  useEffect(() => {
    if (mensaje) {
      setMensajeInicial((mensajesPrevios) => [...mensajesPrevios, mensaje]);
    }
  }, [mensaje]);

/* La lista se crea utilizando el método map del array lista, que itera sobre cada elemento del array y devuelve un nuevo elemento Mensaje para cada uno */
  return (
    <div className="container-msj">
      {mensajeInicial.map((mensaje, index) => (
         <Mensajes mensaje={mensaje} key={`${contactoID}.${mensaje.id}.${index}`}/>
        ))}
        </div>
)
}
export default ListaMensajes;


