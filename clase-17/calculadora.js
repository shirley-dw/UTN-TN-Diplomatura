/* function validateEmail(email){
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) 
}

function login (){
    let email = prompt("Ingrese su email")
    while(!(validateEmail(email))){
        alert('ERROR: Email invalido, reintente')
        email = prompt("Ingrese su email")
    }
    alert('Email registrado:' + email)
    return email
}

function validatePassword(){
    let password = prompt("Ingrese su contraseña")
    while(!(password.length >= 6 && password != '' && password != null && /[A-Z]/.test(password))){
        alert('ERROR: Contraseña invalida, reintente')
        password = prompt("Ingrese su contraseña")
    }
    alert('Contraseña registrada:')
    return password
}

let userEmail = login()
let userPassword = validatePassword()
 */

function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password) {
    return (  Boolean(password) && password.length > 6 && password != password.toLowerCase() )
}


function obtenerDato (data){

    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}


const DATOS = {
    EMAIL: {
        mensaje: "Bienvenido, por favor ingrese su email: ",
        error: "Error, por favor ingrese un email valido: ",
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje: "Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ",
        error: "Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ", 
        validacion: validarPassword
    }
}

function login() {
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
}