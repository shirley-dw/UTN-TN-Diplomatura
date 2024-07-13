# Clase 26° 01/07:

* Correccion de ejercicio de mensajeria clase 25º
* Ejercicio de mensajeria clase 26º agregando router dom
----------------------------------------------------------------------------------------------------------------------------------------

# Anotaciones: 

# Web Pack:
Minimiza todos los archivos de css y los comprime en uno unificandolos.
Webpack es un paquete de módulos para JavaScript, que se encarga de unificar y procesar los archivos de código, incluyendo CSS, JavaScript, imágenes y otros recursos, en un solo archivo o varios archivos que se pueden cargar en un navegador.

* Resumen WebPack:
- WebPack es una tecnologia utilizada para empaquetar todos los archivos CSS, se minimizan todos en un solo archivo permitiendo que vite cargue un solo CSS comprimido con todo el codigo de estilos. Se transforma en un archivo comprimido convrtiendolo en un archivo CSS minimizado. Esto facilita el mantenimiento de la pagina al momento de modificar mi codigo CSS en cada archivo. 

----------------------------------------------------------------------------------------------------------------------------------------

# Virtual DOM:

El DOM Virtual (Document Objet Model Virtual) es una representación en memoria del DOM (Document Objet Model) real. Cuando se produce un cambio en el estado de la aplicación, React actualiza el DOM virtual en lugar de actualizar directamente el DOM real.

El proceso de actualización del Virtual DOM se conoce como "reconciliación". Durante este proceso, React compara el DOM virtual con el DOM real y determina qué cambios se necesitan para que el DOM real se ajuste al estado actual de la aplicación.

Si se detectan cambios, React aplica solo los cambios necesarios al DOM real, en lugar de volver a renderizar toda la interfaz de usuario. Esto mejora significativamente el rendimiento de la aplicación, ya que solo se actualizan los elementos que han cambiado.

* Resumen:
Es una representación del DOM en memoria, que se compara con el DOM real para ver si
hay cambios y si los hay, se actualiza el DOM real es menos pesado ya que actualiza en partes y no todo el sitio.

----------------------------------------------------------------------------------------------------------------------------------------

# NPM RUN BUILD:
Es una herramienta que se utiliza para compilar el código fuente de una aplicación en un solo
archivo. 
Esto permite que la aplicación sea más fácil de distribuir y de ejecutar en un entorno de producción. La herramienta también puede ser utilizada para optimizar el código. 

* El script builds encarga de compilar y construir el proyecto, lo que puede incluir tareas como:
- Compilar código fuente en código de máquina.
- Minificar archivos de código fuente.
- Generar archivos de distribución para diferentes plataformas.
- Ejecutar pruebas de integración o de carga.

Hace un proceso por detras para comprimir todo el codigo de CSS.

----------------------------------------------------------------------------------------------------------------------------------------

# States (UseState):
Los estados son variables que se pueden cambiar en el tiempo, es decir, que pueden cambiar su valor
en cualquier momento. Los estados se utilizan para almacenar información sobre el estado actual de la aplicación
y para controlar el flujo de la aplicación. 
Los estados se pueden cambiar mediante funciones de control que se ejecutan en respuesta a eventos del usuario o de la aplicación. 
Los estados se pueden utilizar para almacenar información sobre el estado actual de la aplicación:
- El estado actual de la aplicación.
- El estado anterior de la aplicación.
- El estado futuro de la aplicación.

                              ······································································

* Resumen de clase:

# useState (UseState):
Para utilizar useState(), debemos importarlo desde el módulo React:
<!-- import { useState } from "react"; -->
UseState() Toma un único argumento que determina el valor inicial del estado. 
Este argumento puede ser una cadena, un número, un array, un objeto o cualquier otro tipo de datos de JavaScript. 
UseState() devuelve un ARRAY que contiene DOS elementos, el primer elemento es el valor actual del estado y el segundo elemento es una función que se puede utilizar para actualizar el estado, 

* Ejemplo : const [] = UseState() 

# EJEMPLOS DE USESTATE:
const [valor, fnCambiadora] = UseState() // Desestructuracion del array con UseState
const [valor, fnCambiadora] = React.useState(0) // Desestructuracion de inicio.
const [valor, fnCambiadora] = React.useState({}) // Desestructuracion de objeto.
const [valor, fnCambiadora] = React.useState([]) // Desestructuracion de array.

----------------------------------------------------------------------------------------------------------------------------------------

# Initial Value:
El valor inicial es el valor que se asigna a una variable cuando se crea o se pasa como parametro de un useState ().

----------------------------------------------------------------------------------------------------------------------------------------

# Evento onClick:
En React, el evento onclick se maneja de manera diferente a como se hace en HTML tradicional. 
* Ejemplo onClick en React:

import React, { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0); <!-- En React, count y setCount son dos variables que se crean utilizando el hook useState. -->

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>Clickeame! ({count})</button>
  );
}

----------------------------------------------------------------------------------------------------------------------------------------

# Evento onSubmit:
El evento onSubmit se utiliza para manejar el envío de un formulario en React.
* Ejemplo onSubmit en React:

import React from 'react';

function Formulario() {
  const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulario enviado!');
};
  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" />
      <br />
      <label>Apellido:</label>
      <input type="text" />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

En este ejemplo, creo un componente Formulario que contiene un form con dos campos de entrada para el nombre, el apellido, y un botón "Enviar".
Cuando se hace clic en el botón "Enviar", se dispara el evento onSubmit y se llama a la función handleSubmit. 
 En esta función, uso event.preventDefault() para evitar que el formulario se envíe por defecto, y luego imprimimos un mensaje en la consola para indicar que el formulario ha sido enviado.


----------------------------------------------------------------------------------------------------------------------------------------

# Ejercicio de la clase 26º con useState () y onClick:

const [valor, fnCambiadora] = useState (1) <!-- Recibe por parametro un valor inicial -->
const incrementar = () => {
    fnCambiadora(valor + 1) <!--  fnCambiadora: Mi pagina reacciona al cambio de estado ya que no se puede resignar un valor:
                                  const incrementar = () => { valor = valor + 1} -->
}
return(
    <>
    <img src="" alt="" />
    <span>Contador:{valor}</span>
<button onClick={incrementar}>Incrementar</button>
</>
) 

React siempre que pueda evitar re-renderizar lo va a hacer, siempre que peuda cambiar o volver mostar los nuevos valores lo va a hacer.


----------------------------------------------------------------------------------------------------------------------------------------

# Assignament to constant variable: Error de desestructuracion, reasignar una constante no se puede, es invalido.

----------------------------------------------------------------------------------------------------------------------------------------

# Operador Ternario:

Si mi contador es  === 0 ?(Entonces hace tal cosa) : (Sino hace otra cosa) --> 

El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
Sintaxis:
condición ? expr1 : expr2

Una expresión que se evalúa como true o false.


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

----------------------------------------------------------------------------------------------------------------------------------------

# Operador corto circuito IF SIMPLE:
{contador > 1 && <h2> Sigue, comprando </h2>}
Condiciones simples.

----------------------------------------------------------------------------------------------------------------------------------------

# Ejercicio de la clase 26º:

Crear un componente contador que renderize:
· Boton decrementar
· Span con valor de contador
· Boton incrementar
· El contador no puede estar en 0 y su limit debe ser 10 maximo

<Contador limit = {10}/>
 
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

----------------------------------------------------------------------------------------------------------------------------------------

# React siempre que pueda re-renderizarme lo va a hacer
En React, cada vez que el estado o las props de un componente cambian, React vuelve a renderizar el componente con los nuevos valores. Esto significa que React re-evalúa la función de renderizado del componente y vuelve a generar el HTML correspondiente.

----------------------------------------------------------------------------------------------------------------------------------------

# ERROR Assignament to constant variable: Error de desestructuracion, reasignar una constante no se puede, es invalido.

----------------------------------------------------------------------------------------------------------------------------------------

# Estado de un array:


# HTML FOR:
El atributo for de un elemento <input> o <select> se utiliza para establecer un nombre para el elemento. El nombre se utiliza para identificar el elemento en el formulario en React.




