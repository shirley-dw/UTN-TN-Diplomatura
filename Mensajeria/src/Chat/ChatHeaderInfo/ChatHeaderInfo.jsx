import React from'react'
import './ChatHeaderInfo.css'
/* Background img chat */
/* Pantalla de celular */

/* Import imagen de perfil */
import profile from '../../Components/assets/profile.jpg' /* Dos punto + barra va una carpeta atras */
/* Iconos importados de libreria React-icons */
import { SlArrowLeft } from "react-icons/sl";
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdPhone } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

/*  Define un componente llamado ChatHeaderInfo y lo exporta para ser usado en otros archivos.
 El componente devuelve un elemento div con la clase chat-header-info,(Contiene el encabezado de la pantalla de chat */
const ChatHeaderInfo = () => {  
    return (

            <div className="chat-header-info">
            <div className= 'chat-header'>
            <a href="" className='back-header'><SlArrowLeft /></a>
            <img src={profile} alt="profile"  className='profile'/>
        <div>
        <h1 className='profile-name'>Gatito</h1>
        <p className='status-text'>En línea</p>
        </div>
        </div>
        <div className='chat-header-icons'>
          <a href="" className='icons'><GoDeviceCameraVideo /></a>
          <a href="" className='icons'><MdPhone /></a>
          <a href="" className='icons'><IoMenu /></a>
            </div>
        </div>

    )
}

export default ChatHeaderInfo