import React from "react"

 export const ProfileCard = (props)=> {
    const persona = props.persona /* Llamo a la variable en vez de usar props */
    return(
        <div>
                <h2>Nombre completo : {persona.nombre}{persona.apelido}</h2>
                <span><strong>Edad:</strong>{persona.edad} </span>
                <h3>Ubicacion: {persona.ubicacion}</h3>
                
       </div>
    )
}
/* Props:  Cada componenete que nosotros creamos tiene aceso a las props estas estan definidas en los parametros de los 
componenetes, estas se ejecutan como objetos en la consola.
Ejemplo: export const ProfileCard = (property)=> {*/