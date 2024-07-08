
import React from 'react'/*Importa la biblioteca de React */
import './Mensaje.css'/* Importa mensajes.css */

export const Mensaje = ({props}) => { /* Define un componente Mensajes y lo exporta para ser usado en otros archivos, recibe una props */
    const { author, text, status, day, hour, id } = props /* Desestructura el objeto props y extrae las propiedades, que se utilizarán en el componente */
    let direccion /* Declaro dos variables direccion y color que se utilizarán para establecer el estilo del componente */
    let color
    /* Esta condición verifica si el autor del mensaje es "yo". Si es así, establece la variable direccion  y la variable color */
        if(author === 'yo'){
             direccion = 'end'
             color = '#D9FDD3'
}
return (
    <div className= 'content' style= {{ justifyContent: direccion}}>
    <div className= 'mensaje'  style= {{ backgroundColor: color }}>
        <p className='text'>
            {text}
            </p>
            <div className='content-lower'>
                <span className='timeSince'>
                {` ${day} ${hour} `}
                 </span>
            <span className='timeSince'>
                {status}
                </span>
        </div>
        </div>
    </div>
    )
}