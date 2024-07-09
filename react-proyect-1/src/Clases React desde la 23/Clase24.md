Temas de la clase 23: 
* Como crear un componente.
* Como exportar e importar archivos y componenetes.
* Como invocar o instanciar componentes.
* Que son las dependencias y como se instalan (No aprendimos a instalas nuevas).
* Diferencia de componenete y funciones. =>
# Un compoenete devuelve jsx y la function NO.

----------------------------------------------------------------------------------------------------------------------
# CLASE 24 24/06

1) ¿Que es un componente?

# Un componenete es una funcion que retorna HTML o mejor dicho JSX, se la debe crear con mayuscula incial:
* Los componentes requieren un RETURN () Siempre con parentesis.
* Los componentes se pueden exportar y importar.
* Ejemplo de funcion: 

const Nombre = () = > {
  return (
    <h1>Hola Mundo</h1>
    )
}

* Segunda forma de llamar un componente:
function Nombre () {
  return (
    <h1>Hola Mundo</h1>
    )
}
 Es una funcion que se puede reutilizar en diferentes partes de la aplicacion, puede recibir props (propiedades) que se pueden utilizar en el componente,puede
tener estado (UseState) que se puede utilizar en el componente.
Un componente puede tener ciclo de vida (lifecycle methods) que se pueden utilizar en el componente
Un componente puede tener eventos (events) que se pueden utilizar en el componente.
El archivo JS (JavaScript) no retorna HTML.

# Fragmento JSX:
Un fragmento JSX es un pedazo de JSX que se puede utilizar en un componente para no crear un padre.

----------------------------------------------------------------------------------------------------------------------------------------

2) ¿Como exportar o importar componenetes?
Se exporta un componente con la palabra clave "export" y se importa con la palabra clave "import",
primero debo exportar y luego importar.
Ejemplo de exportar un componente: export {Componente};
Ejemplo de importar un componente: import Componente from './Componente';

# Formas de exportar:
- Primera forma: Exporta desde el componente, solo exporta el componente que contenga el export.
export const Boton = () => {
  USANDO EXPORT ANTES DEL COMPONENTE ESTOY EXPORTANDO EL MISMO
}
- Segunda forma:
const Boton = () => {
  return (
    <h1>Hola Mundo</h1>
  )
}
export {Boton}

- Tercera forma: Exporta por fuera de la declaracion del componente (FUNCION).
export default const Boton = () => {
  return (
    <h1>Hola Mundo</h1>
  )
}

# Formas de importar:
- Primera forma: Importa desde el componente, solo importa el componente que contenga el import.
import Boton from './Boton'

- Segunda forma: Importa por fuera de la declaracion del componente (FUNCION).
import {Boton} from './Boton'


# Siempre debo importar React en cualquier archivo JSX.
import React from 'react'; 

# Buena practica:
- Importar siempre al principio del archivo los componentes que deseo llamar.
- Importar siempre React al principio del archivo.
- Exportar siempre al final del archivo el componente que deseo exportar.

----------------------------------------------------------------------------------------------------------------------------------------

3) ¿Como abrir el archivo en el navegador?
- Abro la terminal Ctrl + J
- Escribo npm run dev
- Abro el link que me da la terminal

----------------------------------------------------------------------------------------------------------------------------------------

4) ¿Como invocar o instanciar componentes?
# Instanciar es:
Cuando se instancia un componente, se crea una nueva copia de ese componente en memoria, con sus propias propiedades y estado. Esta instancia del componente se puede personalizar y configurar según sea necesario para la aplicación.
# Invocar es:
Cuando se invoca un componente, se llama a la función que define el componente y se pasa
una serie de propiedades como argumentos. Estas propiedades se pueden utilizar para personalizar el
componente y configurarlo según sea necesario para la aplicación.

* Ejemplo: 
/pages/Coontact.jsx

Import React from 'react'
Import {ContactForm} form './componente'

const Contact = () => {
        return (
        <h1>Formulario de contacto</h1>;
        <!-- Aqui debes instanciar el formulario de contacto -->
        <ContactForm/> <!-- ESTO ES INSTANCIAR UN COMPONENTE -->
        <ContactForm/> <!-- Estoy creando dos formularios de contacto -->
 )
}

5) Fragmentos como padres: 
Existen dos maneras de hacer un fragmento en un componente.
- Utilizando <> </> Fragmentos, a estos no se le puede dar estilos porque son invisibles.

- Utilizando <div> </div> como padre contenedor, o un <section>  </section>, <main> </main>.
----------------------------------------------------------------------------------------------------------------------------------------

                                                ·inicia los temas de la clase 24·

# Props: 
Las props se definen como atributos en la etiqueta de un componente hijo y se pasan como argumentos a la función o clase del componente. Las props se pueden utilizar para personalizar la apariencia y el comportamiento de un componente hijo, y se pueden pasar cualquier tipo de datos, como cadenas, números, objetos, arrays, incluso otras funciones.
Cada componenete que nosotros creamos tiene aceso a las propiedades estas estan definidas en los parametros de los 
componenetes, estas se ejecutan como objetos en la consola.

* Ejemplo: 
import React from 'react';

const HelloWorld = (props) => {  <!-- Le paso la props -->
  return <h1>Hello, {props.name}!</h1>; <!-- Llamo a la props con el agregandole el valor name con {props.name} -->
};

const App = () => {
  return <HelloWorld name="Alice" />; <!-- Utilizo la propiedad name del componente HelloWord -->
};

# Ejemplo de la clase (PROPS):
import React from 'react';

Const App = () => {
  const persona-1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    };
    const persona-2 = {
      nombre: 'Maria',
      apellido: 'Gonzalez',
      };
      return ( 
        <>
        <ProfileCard Llamo al objeto 1 
        persona = {persona-1} 
        />
        < ProfileCard
        persona = {persona-2} <!-- Llamo al objeto persona dos Maria Gonzales -->
        />
        </>
        );
  }
  const ProfileCard = (props) => {
    return (
      <div className="profile-card">
      <h1>{props.persona-1.nombre}</h1> <!-- Llamo a la propiedad nombre del objeto persona -->
      <h2>{props.persona-2.apellido}</h2> <!-- Llamo a la propiedad apellido del objeto persona -->
      </div>
  );
}

# Para no escribir (PROPS) tantas veces se hace de la siguiente manera:
import React from 'react';
const App = () => {
  const persona-1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    };
    const persona-2 = {
      nombre: 'Maria',
      apellido: 'Gonzalez',
      };
      return (
        <>
        <ProfileCard persona = {persona-1} /> <!-- "LLAMO A LA PERSONA UNO LLAMANDO A LA VARIABLE PERSONA -->
        <ProfileCard persona = {persona-2} />
        </>
        

----------------------------------------------------------------------------------------------------------------------------------------

# Desestructuring (Desestructurar una props):

En React, "desestructurar una prop" (también conocido como "destructuring" english) refiere a la práctica de extraer valores individuales de una prop que es un objeto y asignarlos a variables separadas.
 Cuando se pasa un objeto como prop a un componente, se puede acceder a sus propiedades usando la notación de punto (por ejemplo, props objeto.propiedad).
Desestructurar una prop permite acceder a las propiedades del objeto de manera más concisa y legible.

* Resumen de clase:
- Es una forma de desestructurar un objeto o array.
- Es una forma de asignar variables a un objeto o array.
* Ejemplo JS:

const {name, age} = persona; <!-- Las llaves son parte de la sintaxis de desestructuracion de objetos -->
const [name, age] = persona <!-- Los corchetes son parte de la desetructuracion de Arrays  -->

- Es lo mismo que hacer lo siguiente:
const name = persona.name;
const age = persona.age;
* Llamado a la constante JS:
console.log('Hola me llamo ${name} ${age})

# Otro ejemplo de desestructuring JS:

const saludarPersona = (persona) => {
  const {nombre, apellido} = persona; <!-- Desestructuramos el objeto persona y asigno nombre y apellido a esa persona como variables.
  console.log(`Hola me llamo ${nombre} ${apellido}`)<!-- Uso comilla invertida para concatenar -->
}
saludarPersona(persona) <!-- Llamo al nombre y apellido -->

# Desestructurar un array: JS
const [name, age] = ['Juan', 25]; <!-- Los corchetes son parte de  la sintaxis de desestructuracion -->

----------------------------------------------------------------------------------------------------------------------------------------

# DESESTRUCTURING JSX SINTAXIS: 

* Ejemplo de desestructuracion de un objeto:

const persona = {
  nombre: 'Maria',
  apellido: 'Gonzalez',
  edad: 25,
}

<ProfileCard persona = {persona} /> <!-- Llamo a la persona y le paso la variable persona a la prop persona de ProfileCard.jsx -->

----------------------------------------------------------------------------------------------------------------------------------------

6) Moverse entre carpetas:
Con doble .. y / voy una carpeta hacia atras 
* Ejemplo: 
import {ContactForm} from '../componentes/ContactForm.jsx';
import {MensajeForm} from "../../src/componentes/MensajeForm.jsx";
import {MensajeForm} from "../../../src/componentes/MensajeForm.jsx"; <!-- Asi se mueve entre carpetas -->

----------------------------------------------------------------------------------------------------------------------------------------

7) ¿Como importar un archivo de css?
import './styles.css'; <!-- Asi se importa un archivo de css -->

----------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------
8) ¿Como importar un archivo de js?
import './script.js'; <!-- Asi se importa un archivo de js -->

----------------------------------------------------------------------------------------------------------------------------------------

9) ¿Como importar un archivo de json?
import './data.json'; <!-- Asi se importa un archivo de json -->

- Para moverse entre carpetas, se utiliza el comando cd 
- Para crear una carpeta, se utiliza el comando mkdir
- Para crear un archivo, se utiliza el comando touch
- Para eliminar un archivo, se utiliza el comando rm
- Para eliminar una carpeta, se utiliza el comando rm -r
- Para mover un archivo, se utiliza el comando mv

----------------------------------------------------------------------------------------------------------------------------------------

# Export:
- Es una forma de exportar un componente o un archivo.
- Es una forma de exportar un objeto o un array.
Se puede utilizar en el lugar donde yo quiera exportarla. 
Ejemplo: export const ProfileCard = (property)=>{}

----------------------------------------------------------------------------------------------------------------------------------------

# Interpolacion:
- Es una forma de concatenar variables en una cadena de texto.
* Ejemplo:
let nombre :'pepe'
const App = () => {
  return (
    <div>
    <h1>Hola {nombre}</h1> <!-- Esto va a devolver "HOLA PEPE" -->
}

----------------------------------------------------------------------------------------------------------------------------------------

# Cuando se hace interpolacion se puede hacer este tipo de cosas:
- Concatenar variables.
- Concatenar funciones.
- Concatenar objetos.
- Concatenar arrays.
* Ejemplo: 
let nombre :'pepe'
const App = () => {
  return (
    <div>
    <h1>Hola {nombre}</h1> <!-- Esto va a devolver "HOLA PEPE" -->
    <span>Resultado de 1 + 1 = {1+1} Esto es interpolar</span> <!-- Me va a devolver: RESULTADO DE 1 + 1 = 2 -->
}
* Lo mas normal es crear una funcion sumar y que retorne el valor de 1 + 1 y luego llamarla en el componente deseado.



