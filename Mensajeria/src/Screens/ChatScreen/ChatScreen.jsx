import React from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../index.js' /* Importa tres componentes desde el archivo. Estos componentes se utilizarán en el componente ChatScreen */
import './ChatScreen.css' /* Importa el arhivo ChatScreen.css */
import { useState } from 'react' /* Importa el hook useState de React, se utiliza para crear un estado en el componente ChatScreen */
/* Fondo de chat */



export const ChatScreen = () => { /* Define un componente  ChatScreen y lo exporta para que pueda ser utilizado en otros archivos */
  const MOOK_MENSAJES = [ /* Define un array de objetos que representan los mensajes de chat. Cada objeto tiene propiedades.*/
    {
        author: 'yo',
        text: 'Hola sos Jimmy?',
        estado: 'visto',
        day: 'hoy',
        hour: '11:05',
        id: '1'
    },
    {
        author: 'Jimmy',
        text: 'Si soy',
        estado: 'visto',
        day: 'hoy',
        hour: '11:07',
        id: '2'
    },
    {
        author: 'yo',
        text: 'Sos real? OMG',
        estado: 'visto',
        day: 'hoy',
        hour: '11:10',
        id: '3'
    }
]

const [mensajes, setMensajes] = useState(MOOK_MENSAJES); /* Uso el hook useState para crear un estado en el componente ChatScreen. El estado se llama mensajes y se inicializa con el array MOOK_MENSAJES. La función setMensajes se usa para actualizar el estado mensajes */

  const addMensaje = (mensajeNuevo) => { /* Define una función addMensaje que se usa para agregar un nuevo mensaje al estado mensajes. La función toma un parámetro mensajeNuevo que es el texto del nuevo mensaje. La función utiliza la función setMensajes para actualizar el estado mensajes agregando un nuevo objeto que representa el nuevo mensaje. */
    setMensajes([...mensajes, {
      author: 'yo',
      text: mensajeNuevo,
      estado: 'visto',
      day: 'hoy',
      hour: '11:18',
      id: mensajes.length + 1
  }] )
  }

  return (
    <>
      <ChatHeaderInfo/>
      <div>
        <img src={pantalla} alt="" className='pantalla' />
    <div className='chat'> {/* Se utiliza para mostrar el encabezado de la pantalla de chat */}
    <div className='ChatScreen'>
        <ListaMensajes lista={mensajes}/> {/* Se utiliza para mostrar la lista de mensajes y se pasa el estado mensajes como prop */}
    </div>
      <MensajeForm submitMensaje={addMensaje}/> {/* Un elemento MensajeForm se utiliza para permitir enviar MENSAJE NUEVO. El elemento MensajeForm se pasa la función addMensaje como prop submitMensaje, que se utiliza para agregar el nuevo mensaje al estado mensajes. */}
      </div>
      </div>
    </>
  )
}

/* Resumen:  El componente ChatScreen define una pantalla de chat que muestra un encabezado, una lista de mensajes y un formulario para enviar nuevos mensajes. El estado mensajes se utiliza para almacenar la lista de mensajes y se actualiza cuando se agrega un nuevo mensaje. */
