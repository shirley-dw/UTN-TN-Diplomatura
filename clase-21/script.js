// Clase 21° 10/06

/* Profundizar eventos y renderizar las clases de JS */

/* Quier llamar al input username:
console.log(formLoginHTML.username.value) Accedo al valor del input me devuelve 'ANNONYMUS' Llamando su name y value*/

//addEventListener agrega eventos

function validarUsername (username){
return ( Boolean(username) && username.length > 4 && username!= username.toLowerCase() && username.includes ('-'))
}
function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password) {
    return ( 
        Boolean(password) && password.length > 4 && password!= password.toLowerCase() && password.includes("#") 
    )
}

const formLoginHTML = document.getElementById('form-login')

formLoginHTML.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('Se envio el formulario')
    const formulario = event.target 
    const username = formulario.username.value
    const email = formulario.email.value
    const password = formulario.password.value

    let errores = [];

    validarUsername(username) || errores.push('El username debe tener al menos 4 caracteres, una mayúscula y un guion medio (-)');
    validarEmail(email) || errores.push('El email no es válido');
    validarPassword(password) || errores.push('La contraseña debe tener al menos 4 caracteres, una mayúscula y un #');

    if (errores.length > 0) {
      document.getElementById('error-text').innerText = errores.join('\n');
    } else {
      console.log('Éxito');
      }
    }) //  Cerrar la llave del evento addEventListener


/* formLoginHTML.addEventListener('submit', (event) => {
    event.preventDefault()// Previene el comportamiento por defecto del evento submit
    console.log('Se envio el formulario')
    const formulario = event.target 
    const username = formulario.username.value
    const password = formulario.password.value
    const email = formulario.email.value
    if (username, password , email) {
        const errorTextHtml = document.getElementById('error-text')
        errorTextHtml.innerText = 'El username debe tener al menos 4 caracteres'
    }    
}) */



//La funtion en flecha requiere el parametro evento / event o e

/* formLoginHTML.addEventListener('submit', handleLogin) */
// Handle son las funciones que vamos a asociar a los eventos
/* Pseudocodigo:

camara.addEventListener('entrar', (evento) =>{
    El evento recibido es un objeto de informacion:
    Quien entre:
    A que hs:
    Sexo:
    Color-pelo:
    })

    Otro ejemplo:
    pantalla.addEventListener('click', (evento) =>{
    /* 'ScreenX': 600
    'ScreenY: 200
   })
*/
