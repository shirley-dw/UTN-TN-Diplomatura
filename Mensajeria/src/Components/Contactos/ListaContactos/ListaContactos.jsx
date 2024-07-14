import React, { useState, useEffect } from "react";
import { Contacto } from "../../Contactos/Contacto/Contacto.jsx";
import "./ListaContactos.css";
import ObtenerContactos from '../../../Fetching/contactos.fetching.js'

export const ListaContactos = ({ search }) => {
  const [contactos, setContactos] = useState([]);
  const [contactosFiltrados, setContactosFiltrados] = useState([]);

  useEffect(() => {
    ObtenerContactos()
     .then((contactos) => {
        setContactos(contactos);
      })
     .catch((error) => {
        console.error("Error al obtener contactos:", error);
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
        <Contacto key={contacto.id} contacto={contacto} />
      ))}
    </div>
  );
}