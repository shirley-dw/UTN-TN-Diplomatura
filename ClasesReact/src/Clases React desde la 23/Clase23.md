 Clase 23° 19/06

1) Descargamos node.js desde la pagina oficial
2) Damos okey a todo hasta que diga finalizado
3) Abrimos la consola de comandos y escribimos node -v para verificar que se haya instalado correctamente.
4) Escribimos npm -v y verificamos la version.


Pasos siguientes:
- ABRO MI TERMINAL
- NPM CREATE VITE@LATESTj vite es: Una plataforma que permite utilizar frameworks
- Continuamos con el nombre del proyecto
- Seleccionamos el template que queremos utilizar (en este caso, JavaScript y react)
- Seleccionamos el lenguaje que queremos utilizar (en este caso, JavaScript)
- Se crea un carpeta con el nombre asignado.

# Cada vez que quiera trabajar con React.js debere seguir las indicaciones mencionadas anteriormente.

# Sitio oficial de npm: 
Dependencias: Cada vez que uno instale una la misma debere descargar todas las dependencias que contiene. 
Indicando npm install en mi carpeta de react.
# Sitio oficial de npm: https://www.npmjs.com/

# npm install: 
Se crea la carpeta node_modules y la carpeta package.lock.json el cual "NO DEBE EDITARSE NUNCA".
# package.json:
 Es el archivo que contiene la configuración del proyecto. Se puede editar.
# package-lock.json: 
Es el archivo que contiene la configuración de las dependencias del proyecto. "NO DEBE EDITARSE NUNCA".

# nodemodule:
Es la carpeta que contiene todas las dependencias del proyecto.
La ignoraremos desde gitignore ya que pesa mucho.

# Ignorar con git ignore:
git ignore +
node_modules 

# const App = () => {
  return ( /* Simpre tiene que tener return */
    <> {/* Esto es un fragmento sirve para evitar crear elementos padre, se utiliza apertura y cierre */ }
    <h1>Hello desde React</h1>
    <ProductCard/> {/* LLama al componente ProductCard, se puede llamar mas de una vez*/}
    <Carrito/>
    <Item/>
    </>
  )
}

# LOS COMPONENTES SE ESCRIBEN CON MAYUSCULA INICIAL

# LAS CLASES EN REACT SE ESCRIBEN COMO CLASSNAME
Ejemplo: 
const App = () => {
  return ( /* Simpre tiene que tener return */
    <> {/* Esto es un fragmento sirve para evitar crear elementos padre, se utiliza apertura y cierre */ }
    <h1 className='Titulos'>Hello desde React</h1>
  
    </>
  )
}

# Reglas de importacion

const  PI = 3.14

export {PI,} 

# Luego lo puedo importar en otro archivo con Import {PI} from './funciones' */

Se pueden importar y exportar archivos, componenetes y variables 

# El export utiliza llaves para llamar

# CODIGOS DE LA CLASE 23º-:

import React from 'react'
import {PI} from './Funciones/funciones' # Importo a PI
import { Carrito } from './Components/Carrito/Carrito' # Importo a Carrito
import { Item } from './Components/CarritoItem/CarritoItem' #Importo a CarritoItem


const App = () => {
  return (  Simpre tiene que tener return 
    <> {/* Esto es un fragmento sirve para evitar crear elementos padre, se utiliza apertura y cierre 
     <h1>Hello desde React</h1> 
     <ProductCard/> LLama al componente ProductCard, se puede llamar mas de una vez
    </>
  )
}

const ProductCard = ()=>{
  return (
    <div>
      <h3>Titul producto</h3>
      <span>Precio: $$value</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero blanditiis nam, eos reiciendis vero quam vel aliquid nihil accusantium ducimus animi. Explicabo corporis illo culpa neque commodi alias animi.</p>
    <button>Comprar</button>
    </div>
  )
} 

# Crea un componente llamado carrito: 
El componente carrito tendra un h1 que dira 'Carrito de comprar'

Luego crear otro componente llamado Item
El componente item tendra la siguiente estructura:
<div>
<h2>Nombre del producto</h2>
<span> Cantidad: x </span>
<button>Eliminar</button>
</div>

Mostrar el carrito en el componente App

export default App


