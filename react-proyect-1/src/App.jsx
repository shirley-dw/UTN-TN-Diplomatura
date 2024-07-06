import React from 'react'
import {PI} from './Funciones/funciones' /* Importo a PI
import { Carrito } from './Components/Carrito/Carrito'
import { Item } from './Components/CarritoItem/CarritoItem'

/* console.log(PI)  *//* Importo a PI */
const App = () => {
  return ( /* Simpre tiene que tener return */
    <> {/* Esto es un fragmento sirve para evitar crear elementos padre, se utiliza apertura y cierre */ }
    {/* <h1>Hello desde React</h1> */}
     {/* <ProductCard/> LLama al componente ProductCard, se puede llamar mas de una vez*/}
    
      
    </>
  )
}

/* const ProductCard = ()=>{
  return (
    <div>
      <h3>Titul producto</h3>
      <span>Precio: $$value</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero blanditiis nam, eos reiciendis vero quam vel aliquid nihil accusantium ducimus animi. Explicabo corporis illo culpa neque commodi alias animi.</p>
    <button>Comprar</button>
    </div>
  )
} */

/* Crea un componente llamado carrito
El componente carrito tendra un h1 que dira 'Carrito de comprar'

Luego crear otro componente llamado Item
El componente item tendra la siguiente estructura:
<div>
<h2>Nombre del producto</h2>
<span> Cantidad: x </span>
<button>Eliminar</button>
</div>

Mostrar el carrito en el componente App
*/

export default App

