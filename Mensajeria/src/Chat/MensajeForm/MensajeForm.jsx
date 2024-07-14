 import React from 'react' /* Importa la biblioteca de React */
import './MensajeForm.css'/*  importa un archivo de estilos CSS / MensajeForm.css */
/* Iconos de input */
import { IoCameraOutline } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const MensajeForm = ({submitMensaje}) => { /*  Creo un componente de MensajeForm con su prop y lo exporta para ser usado en otros archivos */
    const handleSubmit = (event) => { /* Define una función handleSubmit que se llama cuando se envía el formulario, con un objeto 'event' como parametro */
        event.preventDefault() /* Evito estilos por defecto */
        submitMensaje(event.target[0].value) /* Llama a la función submitMensaje que se pasó como prop al componente MensajeForm, y le pasa como parámetro el valor del primer elemento del form [0] */
        event.target.reset() /* Resetea el formulario */
        console.log(event) /* Imprime el objeto event en la consola del navegador */
    }
    return (
        <div className='form-header'>
            <form onSubmit={handleSubmit} className="form">{/* Cuando se envía el formulario, se llama a la función handleSubmit que se definió anteriormente */}
                <input className='input-mensaje' type='text' placeholder='Escribe un mensaje'/>
                <a href="" className='icons-input'><IoCameraOutline /></a>
                <a href="" className='icons-input'><MdAttachFile /></a>
                <button className='btn-send'><FaArrowRight /></button>
            </form>
        </div>
    )
}
 export default MensajeForm