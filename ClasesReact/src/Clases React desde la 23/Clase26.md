# Clase 26° 01/07:
Crear un componente de clase que reciba un array de objetos y muestre los nombres de las personas en un listado.

# Web Pack:
Minimiza todos los archivos de css y los comprime en uno unificandolos.

# Virtual DOM:
Es una representación del DOM en memoria, que se compara con el DOM real para ver si
hay cambios y si los hay, se actualiza el DOM real.

# Codigo de la clase 26 Contador.jsx
import React from "react";
let contador = 1
No utilizar a document a menos que sea ESTRICTAMENTE NECESARIO
const [valor, fnCambiadora] = UseState() // Desestructuracion del array con UseState
const [valor, fnCambiadora] = React.useState(0) // Desestructuracion de inicio.
const [valor, fnCambiadora] = React.useState({}) // Desestructuracion de objeto.
const [valor, fnCambiadora] = React.useState([]) // Desestructuracion de array.

 fnCambiadora: Mi pagina reacciona al cambio de estado ya que no se puede resignar un valor: const incrementar = () => { valor = valor + 1}

const incrementar = () => {
    fnCambiadora(valor + 1) //Recarga solo el componente y a sus hijos
}
return(
    <>
    <img src="" alt="" />
    <span>Contador:{valor}</span>
<button onClick={incrementar}>Incrementar</button>
</>
)
React siempre que pueda re-renderizarme lo va a hacer 


# Estado:
UseState : Lo usamos para crear un estado, retorna un array donde el primer elemento va a ser el valor actual del estado y 
el segundo estado es una function para cambiar el valor del estado. Esta se debe importar.
UseState debe recibir un valor. Los estados se crean dentro del componente.

Ejemplo : const [] = UseState() 


# Assignament to constant variable: Error de desestructuracion, reasignar una constante no se puede, es invalido.

# Operador Ternario:
Si mi contador es  === 0 ?(Entonces) : (Sino) 
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
Sintaxis:
condición ? expr1 : expr2

Una expresión que se evalúa como true o false.

expr1, expr2
Expresión con valores de algún tipo.

Descripción
Si la condición es true, el operador retorna el valor de la expr1; de lo contrario, devuelve el valor de expr2. Por ejemplo, para mostrar un mensaje diferente en función del valor de la variable isMember, se puede usar esta declaración:

Ejemplo:
 return (
        <div>
            {
                contador === 0 
                ? (<button onClick={handleIncrementar}>Comprar</button>)
                : (
                    <>
                        <button onClick={handleDecrementar}>-</button>
                        <span>{contador}</span>
                        <button onClick={handleIncrementar}>+</button>
                    </>
                )
            }

# Operador corto circuito IF SIMPLE:
{contador > 1 && <h2> Sigue, comprando </h2>}
Condiciones simples.



 Crear un componente contador que renderize:
boton decrementar
span con valor de contador
boton incrementar
el contador no puede estar en 0 y su limit debe ser 10 maximo

<Contador liimt ={10}/>
 
function Contador () {
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
} 
export default App

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

<Contador limit ={10}/>

function Contador () {
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