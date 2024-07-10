/* Buena practica : Evita errores*/
//Todos los archivos JSX deben importar a React
import React from 'react' 

/* Import ReactDOM from 'react-dom/client: Es la libreria que nos permite crear DOM.
   Usamos ReactDOM para crear nuestro DOM virtual de react */
import ReactDOM from 'react-dom/client'

/* Import App from './App.jsx': './' indica una ruta  el cual es el archivo que figuara en la carpeta 'src' App.jsx
   Lo que hace es importar el componente (funcion) App */
import App from './App.jsx'
import { PI } from './Funciones/funciones.jsx'/* IMPORT AUTOMATICO  */

/* Esta linea de codigo crea un DOMVirtual con el elemento con id='root' y luego crea un dom virtual */
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
/* Los componentes son funciones que retornan JSX, (JSX) Es un codigo muy parecido a HTML
function App() {
  return (
    <> 
    </>
  )
}
export default App

Las funciones en mayuscula como 'function App() se escriben en mayuscula
*/
PI/* HACE UN IMPORT AUTOMATICO */