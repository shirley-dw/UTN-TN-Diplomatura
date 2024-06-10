console.dir(document)

/* 
# Que es document.getElementById?

- Document representa como objeto a nuestro HTML
- Obtengo un elemento(etiqueta de html) por su id='' document.getElementById busca el primer elemento con el 
id='titulo' y retorna ese, si no existiera retorna null
1) Creo un h1 con id='titulo' y lo llamo en js con una variable const titulo  asignandole el valor 
   document.getElementById('titulo')
*/
/* const titulo = document.getElementById('titulo') //Es un HTMLElement
console.dir(titulo) 

titulo.innerText='pepe'//innerText modifica la propiedad desde document

const caja = document.getElementById('producto')

const producto ={
    precio: 1000,
    nombre: 'tv samsung',
    descripcion: 'lorem ipsum'
}
caja.innerHTML = `
    <h1>${producto.nombre}</h1>
    <p>${producto.descripcion}</p>
    <span>Precio: $${producto.precio}</span>
    <button>Comprar</button>
    ` */
     

/* caja.innerText = '<h1 Tv Samsung </h1>' //Lo muestra como etiqueta <h1 Tv Samsung </h1>
caja.innerHTML = '<h1 Tv Samsung </h1>' //La propiedad muestra el <h1>  */

// Asi se crea un elemento  
/* const buttonProduct =document.createElement('button')//En mi HTML creo el elemento button
buttonProduct.innerText='comprar'
console.dir(buttonProduct)
caja.appendChild(buttonProduct) */


/* PRACTICA 1°:
const user = {
    username: 'pepesito',
    password: '******4',
    adress: 'av siempre viva',
    email: 'pepe@gmail.com'
}

Generar a partir del usuario el siguiente html

h2 username
span password
adress input (y el valor debe ser la direccion),
input (y el valor debe ser el email)
*/


// Resolucion del ejercicio 1°

/*
Primer paso: Creo un div con el id='userInfo' en HTML
Segundo paso: Creo una const userInfo = asigno el valor document.GetElementById('llamo a mi variable).
Tercer paso: Copio el const user asignado por el profesor.
Cuarto paso: Llamo a mi variable const userInfo agrego .innerHTML y creo las etiquetas necesarias*/

/* 
const userInfo = document.getElementById('userInfo')
 
const user = {
    username: "pepesito",
    password: "******4",
    adress: "av siempre viva",
    email: "pepe@gmail.com",
  };
  
  userInfo.innerHTML = `
  <h2>Nombre: ${user.username} </h2>
  <span> Contraseña: ${user.password} </span> <br>
  <input type="text" value="${user.adress}"> <br>
  <input type="text" value="${user.email}">
  ` */


//PRACTICA 2° document.getElementById con array + for of:

/* 
  const products = [
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    }, 
   
]
const productsContainerHTML = document.getElementById('products-container')

 
let productsList = ''

for(const producto of products){
    
    productsList = productsList +  `
        <h1>${producto.nombre}</h1>
        <p>${producto.descripcion}</p>
        <span>Precio: $${producto.precio}</span>
        <div>
            <input value='${producto.precio}'>
            <button>comprar</button>
        </div>
    `

}
 console.log(productsList)
productsContainerHTML.innerHTML = productsList */

// Practica 3°:   Renderizar el historial, cada elemento de historial debe seguir la sig estructura:


/* 
const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]



<div>
    <span><b>ID: #003</b></span>
    <h3>Tv samsung</h3>
    <span>Fecha: 14/05/2023</span>
    <br>
    <hr>
</div>
*/

//Resolucion de ejercicio 3° renderizar historial:

const productosHTML = document.getElementById('productos')

let listaProductos = ""

const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]
 for(i of historial){
    listaProductos = listaProductos + `
    <div>
    <span><b>ID: #"${i.id}</b></span>
    <h3>${i.nombre}</h3>
    <span>fecha: "${i.fecha}</span>
    <br>
    <hr>
    </div>
`
 }

 productosHTML.innerHTML = listaProductos 


/* const listaHistorialHTML = document.getElementById('lista')

const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]
let itemHistorial = ''

for(const item of historial){

    itemHistorial = itemHistorial + `
    <div>
        <span>
            <b>ID: #${item.id}</b>
        </span>
        <h3>${item.nombre}</h3>
        <span>Fecha: ${item.fecha}</span>
        <br>
        <hr>
    </div>
    `
}

listaHistorialHTML.innerHTML = itemHistorial  */

/*  const historialItem = document.getElementsByClassName('productos')
 console.log(historialItemHTML)
 for(const item of historialItemHTML){
    const btn = document.createElement('button')
    btn.innerText = 'Ver publicacion'
    item.appenedChild(btn)
 }  */


/* Otras formas de llamar a un elemento HTML 

- Llamado por class: const listaHistorialHTML = document.QuerySelector('.producto')
* Siempre selecciona el primero.

- Para llamar a todos los elementos con la misma clase:
const historialItemHTML = document.GetElementByClassName('historial-item')
console.log(historialItemHTML)

- Llamado de id por QuerySelectoras: const listaHistorialHTML = document.QuerySelector('#lista-historial')

*/

/* 
# querySelectorAll: Hace lo mismo que querySelectorByClassName, busca todas las clases y retorna una coleccion.

const historialItem = document.querySelectorAll('.productos')
*/

/* Como capturar el valor de un input (continuacion del codigo anterior)

//Input.value accede al value del input
const input = document.getElementById('input')
console.log(input.value) 

//Añado la clase rojo al elemento input
input.classList.ad('rojo')

//Accedo al objeto r lidta de clases del input
console.log(input.classList)

//Remover una class de mi elemento
input.classList.remove('input')

//Hacer un interruptor de clases, si esta la clase la eliminamos, si no esta la agregamos.
input.classLit.toggle('mostrar')
- Esto busca el input verifica si tiene la clase mostrar, si la tiene la elimina. Si no la tuviera me la agrega en 
mi app de consola.
*/
