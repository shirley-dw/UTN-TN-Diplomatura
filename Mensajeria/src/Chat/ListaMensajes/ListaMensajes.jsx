import React from 'react'
import { Mensaje } from '../Mensaje/Mensaje.jsx'

 const ListaMensajes = ({lista}) => { /* Define un componente de React llamado ListaMensajes y lo exporta para que pueda ser utilizado en otros archivos, define la prop LISTA */
    return (
        <>
        {lista.map((mensaje) => <Mensaje props = {mensaje} key = {mensaje.id}/>)} {/* La lista se crea utilizando el método map del array lista, que itera sobre cada elemento del array y devuelve un nuevo elemento Mensaje para cada uno */}
        </>
    )
}
 export default ListaMensajes
