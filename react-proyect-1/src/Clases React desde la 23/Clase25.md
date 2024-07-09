# CLASE 25º 26/06:


* Correccion del ejercio ColorHunt * 4 cartas de colores.
* Estados (UseState).
* Operador ternario (condicional).

# Anotador :

import React from "react"; <!-- SIEMPRE SE DEBE IMPORTAR REACT -->
---------------------------------------------------------------------------------------------------------------------------------------

<!-- Codigo de la clase 25º -->

1)  KEY PROPS:
Las utiliza react para poder mapear de manera correcata, para que luego no presente fallas.

* key: es un identificador unico para cada elemento.
Ejemplo:
<ul>
<li key="2015">Corinthians</li>
<li key="2016">Palmeiras</li>
</ul> -->

La key puede ser "String" o "Number"

# MAP MAPEA Y SIEMPRE DEVULEVE UN ARRAY
['HOLA', 'PEPE', 'MARTA'].MAP() = ARRAY
['HOLA', 'PEPE', 'MARTA'].MAP((ELEMENTO)) = <span>{elemento}</span> <!-- ESTO ES JSX PORQUE DEVUELVE HTML-->
* Esto devuelve lo siguiente:
<span>HOLA</span>
<span>PEPE</span>
<span>MARTA</span>


let contador = 1

* No utilizar a document a menos que sea ESTRICTAMENTE NECESARIO
const [valor, fnCambiadora] = UseState() // Desestructuracion del array con UseState
const [valor, fnCambiadora] = React.useState(0) // Desestructuracion de inicio.
const [valor, fnCambiadora] = React.useState({}) // Desestructuracion de objeto.
const [valor, fnCambiadora] = React.useState([]) // Desestructuracion de array.

* fnCambiadora: Mi pagina reacciona al cambio de estado ya que no se puede resignar un valor: 
- Ejemplo: 
const incrementar = () => 
{ valor = valor + 1}

const Incrementar = () => {
    fnCambiadora(valor + 1) <!-- Recarga solo el componente y a sus hijos -->
}
return(
    <>
    <img src="" alt="" />
    <span>Contador:{valor}</span>
<button onClick={incrementar}>Incrementar</button>
</>
)

# React siempre que pueda re-renderizarme lo va a hacer
En React, cada vez que el estado o las props de un componente cambian, React vuelve a renderizar el componente con los nuevos valores. Esto significa que React re-evalúa la función de renderizado del componente y vuelve a generar el HTML correspondiente.


# Estados (UseState):
Para utilizar useState(), debemos importarlo desde el módulo React:
<!-- import { useState } from "react"; -->
UseState() Toma un único argumento que determina el valor inicial del estado. 
Este argumento puede ser una cadena, un número, un array, un objeto o cualquier otro tipo de datos de JavaScript. 
UseState() devuelve un ARRAY que contiene DOS elementos, el primer elemento es el valor actual del estado y el segundo elemento es una función que se puede utilizar para actualizar el estado, 

* Ejemplo : const [] = UseState() 

# ERROR Assignament to constant variable: Error de desestructuracion, reasignar una constante no se puede, es invalido.

# Operador Ternario (CONDICION):
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. 
Este operador se usa con frecuencia como atajo para la condicional if.
* Sintaxis: Una expresión que se evalúa como true o false.
<condicion> ? <valor si es verdadero> : <valor si es falso>

* Ejemplo: 
Si mi contador es  === 0 ?(Entonces) : (Sino) 

Descripción
Si la condición es true, el operador retorna el valor de la condicion1; de lo contrario, devuelve el valor de condicion2. Por ejemplo, 

Ejemplo:
 return (
        <div>
            {
                contador === 0 
                ? (<button onClick={handleIncrementar}>Comprar</button>) <!-- Si hace click en incrementar aumentsa el contador a "1" -->
                : (
                    <>
                        <button onClick={handleDecrementar}>-</button>
                        <span>{contador}</span>
                        <button onClick={handleIncrementar}>+</button>
                    </>
                    </div>
                )
            }

# Operador corto circuito IF SIMPLE:
{contador > 1 && <h2> Sigue, comprando </h2>}
Condiciones simples.


# Crear un componente contador que renderize:
· Boton decrementar
· Span con valor de contador
· Boton incrementar
· El contador no puede estar en 0 y su limit debe ser 10 maximo

<Contador liimt ={10}/>
 */




/* function Contador () {
    const [contador, fnCambiadora] = React.useState(0);
    const incrementar = () => {
        fnCambiadora(contador + 1);

        }
        const decrementar = () => {
            fnCambiadora(contador - 1);
            }
            return(
                <>
                <span>Contador:{contador}</span>
                <button onClick={decrementar}>Decrementar</button>
                <button onClick={incrementar}>Incrementar</button>
                </>
                )
} */
export default App