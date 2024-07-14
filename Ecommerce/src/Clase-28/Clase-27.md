# Clase 27º 03/07

# Temas de la clase:
· React-router-dom
· Buenas practicas con React
· Dom Virtual


----------------------------------------------------------------------------------------------------------------------------------------
# Anotador:

· Buena practica : Evita errores, todos los archivos JSX deben importar a React (import React from 'react') 

· Import ReactDOM from 'react-dom/client': Es la libreria que nos permite crear DOM. Usamos ReactDOM para crear nuestro DOM virtual de react .


----------------------------------------------------------------------------------------------------------------------------------------

# Los componentes son funciones que retornan JSX, (JSX) Es un codigo muy parecido a HTML

----------------------------------------------------------------------------------------------------------------------------------------

# Reglas de React:
· Nunca mutar el valor de un estado.
· Si vamos a cambiar un estado debe hacerse mediante un Setter =>
 - Ejemplo const (count, setCount) = useState ()

----------------------------------------------------------------------------------------------------------------------------------------
# Reglas basicas de Figma:
· Figma es un software de diseño de interfaz de usuario (UI) y diseño de experiencia
- Movimiento arriba/abajo del sitio web con scroll del mousse.
- Movimiento horizontal del sitio web Shift + Scroll.
- Zoom in/Zoom out Ctrl + Scroll.

El prototipo es la estructura de como se tiene que ver la pagina web al final.

- Inicio lista de productos/ NavBar
- Detalle del producto al hacerle click. ( Añadir al carrito, etc)
- Pestaña de añadir al carrito con click comprar y finaliza.
- Form de contacto y consultas.(LocalStorage)

----------------------------------------------------------------------------------------------------------------------------------------
# React-router-dom
- Es una libreria que nos permite crear rutas en nuestro sitio web.
Permite hacer enrutamiento en nuestro archivo de React moviendose en diferentes archivos JSX.

----------------------------------------------------------------------------------------------------------------------------------------

# Brouser Objet Model (BOM):
- Es un objeto que nos permite acceder a la informacion del navegador.
  
El modelo de objetos del navegador (BOM) es un componente fundamental del desarrollo web. Incluye una colección de objetos y métodos que permiten la interacción con la ventana del navegador. A diferencia del modelo de objetos del documento (DOM), que se centra en la estructura de la página, el BOM permite la manipulación del navegador. 
El windowobjeto proporciona acceso a las funcionalidades del navegador y permite a los desarrolladores utilizar el BOM para controlar el historial del navegador, administrar temporizadores, responder a eventos e interactuar con la navegación y la ubicación. 
El BOM no está estandarizado y afecta a la programación del lado del cliente, que desempeña un papel importante en la creación de aplicaciones web dinámicas e interactivas. Ofrece una interfaz programática para el entorno del navegador.

----------------------------------------------------------------------------------------------------------------------------------------

# Saber desde que dispositvo se ingresa al sitio web:
 console.log(navigator.userAgent)

----------------------------------------------------------------------------------------------------------------------------------------

# Pasos para instalar libreria React-router-dom:
React Router DOM es una librería que permite agregar enrutamiento a una aplicación web de React. 
Algunas ventajas de usar React Router DOM son: Permite una navegación fluida en una aplicación de una sola página (SPA)

* Pasos para instalar la libreria react-router-dom:

- npm install react-router-dom en la terminal.
- Una vez instalado hay que empezar a enrutar las paginas.
- Se enrutan las paginas dentro de la carpeta Pages, dentro de ella estan sus subCarpetas como Home y dentro de ella el archivo Home.jsx
  Products/Product.jsx la carpeta Pages vendria a ser como los Components.

# Resumen Routes: Secciona la pagina para que sea mas legible y accesible 

1) Creo carpeta Pages dentro creo las carpetas:
· Home
· Detail
· Cart
· Contact
· Products

2) Dentro de cada carpeta cre sus archivos correspondientes:
· Home.jsx
· Detail.jsx
· Cart.jsx
· Contact.jsx
· Products.jsx
3) Luego cada pagina tendra sus secciones (DOS OPCIONES):
· Hacerlo dentro de "Components" una carpeta "Sections"(Para sitiosW mas grandes)
· Hacer una carpeta "Sections" dentro de cada carpeta.
· Tener una carpeta aparte llamada "Sections".

----------------------------------------------------------------------------------------------------------------------------------------

# Una web SPA o single page application:
Se refiere a una forma de desarrollo web en la que la página web está contenida en un único archivo. 
De esta forma, se carga todo en HTML y, mientras naveguemos por la página, irá solicitando el contenido al servidor via ajax.
* AJAX permite a las aplicaciones web validar información específica en formularios antes de que los usuarios los envíen.


----------------------------------------------------------------------------------------------------------------------------------------

# Rafce: EXPORTA POR DEFAULT
Es una forma de decirle a React que se actualice la interfaz de usuario e importe los componentes.