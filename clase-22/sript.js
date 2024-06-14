// CLASE 22° 12/06

// Tema: Asincronia 

/*

* El codigo que realizamos actualmente es codigo sincronico, el codigo que esta arriba se ejecuta primero 
  y luego el codigo que sigue.

FETCH: (Funcion asincronica) Con este puedo obtener recursos externos a mi pagina. Emite consultas HTTP


* Que es una consulta HTTP: Internet se basa en las consultas HTTP, estas son una forma de trasnferir informacion
  (protocolo de transferencia)

* Que es una API: Sirven para comunicar gestiones de consultas devuelve una respuesta en formato JSON (OBJETO).
 Es una aplicacion que se esta ejecutando en un servidor
 externo, 



* Server DNS: Los servidores DNS convierten las solicitudes de nombres en direcciones IP,
  con lo que se controla a qué servidor se dirigirá un usuario final cuando escriba un nombre de dominio en su navegador
  web. Estas solicitudes se denominan consultas.

* Host: Es quien tiene mi sitio web alojado el cual retorna su index o html.

* CALLSTACK O PILA DE LLAMADAS: Es el orden en el que se van a llamar las funciones, el primero en ser llamado siempre 
  es el ultimo en salir.
  Ejemplo: prompt(alert())
 -Resuelve primero el alert para luego resolver el prompt
*/


// Emision de mi consulta HTTP por FETCH

 //Fetch: es codigo asincronico

/* const URL_API ='https://jsonplaceholder.typicode.com/todos/1'//Const que guardan datos primitivos buena practica en mayus
const obtenerUsuarios = async () => {
    const response = await fetch(URL_API + '/users', {
        method: 'GET'
    })
    console.log(response)
}
const obtenerPosts = async () => {
    const response = await fetch(URL_API + '/posts', {
        method: 'GET'
    })
const data = await response.json()//Carga el objeto JSON, agrego AWAIT para que espere el console.log(data)
console.log(data)
   
console.log('Esta es la respuesta:', response)
}
obtenerUsuarios()
obtenerPosts() */

/* Si hace un fetch a esta direccion https://jsonplaceholder.typicode.com/todos/1 van a obtener el detalle
 de un usuario 
 

 Mostrar en HTML dentro de un div un
  h2 con el name: user.name
  span: user.phone
  span: email:{user.email}*/

  
  

/* const URL_API = 'https://jsonplaceholder.typicode.com/todos/1';
const obtenerUsuario = async () => {
const response = await fetch(`${URL_API}/user`, {
      method: 'GET'
    });
const userData = await response.json();
    const userDetail = document.getElementById('user-detail');
    userDetail.innerHTML = `
      <h2>${userData.name}</h2>
      <span>Telefono: ${userData.phone}</span>
      <span>Email: ${userData.email}</span>
    `;
    console.log(userData)
  };
  
  obtenerUsuario(); */

  const URL_API = 'https://jsonplaceholder.typicode.com/todos/1';

  const obtenerUsuario = async () => {
    const response = await fetch(URL_API);
    const { userId } = await response.json();
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userResponse.json();
  
    document.getElementById('user-detail').innerHTML = `
      <h2>${user.name}</h2>
      <span>Teléfono: ${user.phone}</span>
      <span>Email: ${user.email}</span>
    `;
  };
  
  obtenerUsuario();




