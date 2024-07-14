import React from 'react'
import { useParams } from 'react-router-dom'
import {lista_de_productos} from '../../../src/data'


const Details = () => {

    const {productId} = useParams ()/* useParams: Es un hook de la libreria react-router-dom  */
    console.log(productId)
    const producto = lista_de_productos.find(producto => producto.id === Number(productId))

  return (
    <div>
        <h1>{producto.titulo} <span>#{producto.id}</span></h1>
        <p>{producto.descripcion}</p>
        <span>{producto.precio}</span>
        <button>Comprar</button>
    </div>
  )
}

export default Details
/* 
# useParams:
 Se debe llamar dentro de un componente que este instanciado en algun <BrowserRouter></BrowserRouer> 
 Si por ejemplo lo quisiera hacer en Home no funciona ya que no esta dentro de los parametros de BrowserRouter, esto trae valores especiales, captura los valores dentro de la url como por ejemplo el productId, esta se puede guardar en la variable const urlParams

 useParamses es un hook de React Router que permite acceder a los parámetros de ruta en un componente funcional.

Cuando se utiliza useParams, React Router devuelve un objeto que contiene los parámetros de ruta como propiedades. Por ejemplo, si tienes una ruta como /users/:id, el objeto paramsdevuelto useParamstendría una propiedad idcon el valor de la ruta.
*/