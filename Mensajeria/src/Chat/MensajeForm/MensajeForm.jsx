import React, { useState } from "react"
import './MensajeForm.css'
/* Iconos de input */
import { IoCameraOutline } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

/*  Creo un componente de MensajeForm con su prop y lo exporta para ser usado en otros archivos */

const MensajeForm = ({submitMensaje}) => { 
    const [mensaje, setMensaje] = useState('')
    const handleSubmit = (evento) => { 
        evento.preventoDefault() /* Evito estilos por defecto */
        submitMensaje(mensaje) /* Llama a la función submitMensaje que se pasó como prop al componente MensajeForm, y le pasa como parámetro el valor del primer elemento del form [0] */
        setMensaje('')
        evento.target.reset() /* Resetea el formulario */
        console.log(evento) /* Imprime el objeto evento en la consola del navegador */
    }
/* Cuando se envía el formulario, se llama a la función handleSubmit que se definió anteriormente */
    return (
            <form onSubmit={handleSubmit} className="form">
                <input className='input-mensaje' type='text' placeholder='Escribe un mensaje'/>
                <a href="" className='icons-input'><IoCameraOutline /></a>
                <a href="" className='icons-input'><MdAttachFile /></a>
                <button className='btn-send'><FaArrowRight /></button>
            </form>
     
    )
}
 export default MensajeForm
