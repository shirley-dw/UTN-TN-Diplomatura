
// CLASE 17° 27/05

/* TAREA INTEGRADORA

# CALCULADORA
- Tener soporte para las iguientes operaciones: +, -
  * '+'
  * '-'
- Historial de calculadora (Mediante un menu)
- Crear usuario(Esta se ejecuta al entrar a la calculador)
  * EMAIL(Debe estar validado)

# UTILIDADES
- Validacion (Solo podra elegir una operacion, suma o resta).
- Validacion (Solo podra ingresar numeros enteros o decimales).
- Validacion del usuario
- Opcion de CANCELAR */

/* Realizar una calculadora que realice las operaciones de suma y resta, debe tener un usuario con un email validado
y tener la opcion de ver el historial por alert */


/* LOGIN:

Prompt va a solicitar al usuario un email
Validamos que el email sea un email

RegEx / expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) nos retorna un boolean
En caso de que no volvera a solicitar
En caso de que si sea valido dira email registrado {emailRegistrado}

una vez solicitado el email vamos a solicitar password
Valideremos que tenga una letra en mayuscula
que no sea null o ''
que tenga almenos 6 caracteres
En caso de que no volvera a solicitar
En caso de que si sea valido dira password registrada {password} */

/* function validateEmail(email){
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar)) 
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
let email = login()

function validatePassword(password){
    let password = ('Ingrese su contraseña')
    while(!(password.length >= 6 && password != '' && password != null)){
        alert('ERROR: Contraseña invalida, reintente')
        password = prompt("Ingrese su contraseña")
        }
        }
        alert('Contraseña registrada:')

let password = validatePassword() */

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
let userPassword = validatePassword() */

// CASO CORRECTO 

/* function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password) {
    return (password.length > 6 && password != password.toLowerCase() && Boolean(password))
}
function obtenerEmail() {
    let email = prompt("Bienvenido, por favor ingrese su email: ", 'johndoe@gmail.com')
    while (!validarEmail(email)) {
        email = prompt("Error, por favor ingrese un email valido: ", 'johndoe@gmail.com')
    }
    alert('El email esta registrado: ' + email)
    return email
}
function obtenerPassword() {
    let password = prompt("Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ")
    while (!validarPassword(password)) {
        password = prompt("Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ")
    }
    return password
}
function login() {
    let email = obtenerEmail()
    let password = obtenerPassword()
    return { email: email, password: password}
} */




// CODIGO COMPLETO CON MEJORAS
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

const operacionesValidas = ['+','-']
function validarOperacion(operacion) {
    return operacionesValidas.includes(operacion)
}
function validarNumero(valor) {
    let numero = Number(valor)
    return Boolean(numero)
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
    },
    OPERACION:{
        mensaje: "Ingrese una operacion: +, -",
        error: "Error, ingrese una operacion valida: +, -",
        validacion: validarOperacion
    },
    NUMERO1: {
        mensaje: "Ingrese el primer numero: ",
        error: "Error, ingrese un numero valido: ",
        validacion: validarNumero
        },
    NUMERO2:{
        mensaje: "Ingrese el segundo numero: ",
        error: "Error, ingrese un numero valido: ",
        validacion: validarNumero
    }
}

function login() {
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
}
login ();

function ejecutarOperacion(operacion, numero1, numero2) {
    if (operacion == '+') {
        return Number(numero1) + Number(numero2)
    }
    return Number(numero1) - Number(numero2)
}
function calculadora() {
    let operacion = obtenerDato(DATOS.OPERACION)
    let numero1 = obtenerDato(DATOS.NUMERO1)
    let numero2 = obtenerDato(DATOS.NUMERO2)
    let resultado = ejecutarOperacion(operacion, numero1, numero2)
    alert('El resultado de ' + numero1 + operacion + numero2 + ' es ' + resultado)
}
calculadora()

/* Solicita una operacion : '+' o '-', no puede ser '' o null. 
Vamos a solicitar num1: Validar que sea un numero
Vamos a solicitar num2: Validar que sea un numero
En caso de elegir una suma '+': Mostrar por alert 'El resultado de {num1}{operacion}{num2} es {resultado}
En caso de elegir una resta '-':Mostrar por alert 'El resultado de {num1}{operacion}{num2} es {resultado} */


 
/* function obtenerDatos (){
let operacion = prompt("Ingrese una operacion: + o -")
while(!operacion || operacion != '+' && operacion != '-'){
operacion = prompt("Error, ingrese una operacion: + o -")
}

let num1 = prompt("Ingrese un numero: ")
while(!num1 || !Number(num1)){
num1 = prompt("Error, ingrese un numero: ")
}

let num2 = prompt("Ingrese su segundo numero: ")
while(!num2 || !Number(num2)){
num2 = prompt("Error, ingrese un numero: ")
}

if (operacion == '+'){
let resultado = Number(num1) + Number(num2)
alert(`El resultado de ${num1}${operacion}${num2} es ${resultado}`)
} 

else if (operacion == '-'){
let resultado = Number(num1) - Number(num2)
alert(`El resultado de ${num1}${operacion}${num2} es ${resultado}`)
}

return {operacion: operacion, num1: num1, num2: num2
}

}
obtenerDatos();
operacion ();
 */

/* HISTORIAL:

El historial debera tener el siguiente formato

Dado el siguiente array
historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
]


Crear una funcion llamada: renderizarHistorial(historial)

La funcion debera crear un string a partir del array con el siguiente formato y retornarlo:

'
El historial es:

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}
'
Luego mostar el string resultante por alerta

Recuerda: puedes usar `` (template string para hacer saltos de linea) o '\n'
Ejemplo:
'El historial es:\n-hola' 
se vera como:
El historial es
-hola

o con template string:
`
El historial es
-hola
`
se vera como:
El historial es
-hola */

function renderizarHistorial(obtenerDato){
    let resultado = `El historial es:\n`;
    for (let i = 0; i < obtenerDato.length; i++) {
        resultado += `Accion: ${obtenerDato[i].accion}\n`;
}
}
renderizarHistorial();