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

//HISTORIAL
function historial() {
const objetoEnString = JSON.stringify(historial)
localStorage.setItem('historial', objetoEnString)
alert(objetoEnString)
}
function renderizarHistorial(historialRecibido){
    let listaHistorial=''
    for(const item of historialRecibido){
        listaHistorial = listaHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
        `
        }
        return listaHistorial
    }



let elementoHistorial = {
    accion: 'CALCULAR',
    operacion: '+',
    a: 3,
    b: 3,
    resultado: 6
}


function renderizarHistorial (historialRecibido){
    let listaHistorial = ''
    for (const item of historialRecibido){
        listaHistorial = listaHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
        `    
    }
    return listaHistorial
}

/* En la function agregarhistorial vamos a hacer el push que veinamos haciendo pero ademas vamos a guardar
el historial en el locl storage con la key HISTORIAL
*/


function agregarAlHistorial(elementoHistorial){
    const historial = obtenerHistorial()
    historial.push(elementoHistorial)
    const historialString = JSON.stringify(historial);// Transforma a su formato texto
    localStorage.setItem('historial', historialString)
}

/*La funcion obtenerHistorial debe tomar el historial de localStorage y retornarlo como array  */
function obtenerHistorial(){
    const historialString = localStorage.getItem('historial')//getItem: obtener datos
    historial = JSON.parse(historialString)//JSON.parse: Transforma a su formato Objeto de JS
    return historial
    }

/* Verificamos que un usuario que entrapopr primera vez tenga un historial  */
if (obtenerHistorial()=== null){
    /* Si no hay historial, me va a crear uno vacio */
    localStorage.setItem('historial', JSON.stringify([]))
    /* Guardamos un array vacio en JSON.stringify */
}



/* function obtenerHistorial() {
    return historial
} */



/* LocalStorage = Base de datos(Tabla de persistencia de datos)
Si yo creo una variable llamada usuariopepe al recargar se pierde el dato, lo que hace esto es mantener los datos  
Funcionalidad: Le digo a local storage que en la prop tema se guarde el KEY them  VALUE dark/ KEY username VALUE pepe 

Se accede mediante variables globales tanto a localStorage como a essionStorage, los metodos son: 
setItem(key, value) = Guardar datos en el local storage
getItem(key) = Obtener datos del local storage, si o exist retorna null
removeItem(key) = Eliminar datos del local storage (eliminar un valor asociado  la key que recibe)
clear() = Eliminar todos los datos del local storage



SINTAXIS:
localStorage.setItem('key', 'value');
localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear();


/* STACKBLIST PRUEBAS EN SITIOS WEB */


/* JSON(JAVASCRIPT OBJECT NOTATION): Permite manipular variables y objetos.
Es un tipo de archivo de texto, se tiene que escribir como un objeto de js, con doble comilla. Tiene la particularidad que 
se puede transformar en un objeto de js

JSON.parse()// Transforma a su formato objeto de js
JSON.stringify() // Transforma a su formato texto

REGAS DE JSON: 
Si quiero escribir un array uso []
Si quiero escribir un objeto uso {}
Si quiero escribir un string uso " no admite '' ni comilla invertidaa
Si quiero escribir un numero uso 123 
Si quiero escribir nulos, undefined o boolean se escriben como js
Si escribimos objetos/ arrays la ultima como no se utiliza.
]


//Este string es transformable a su formato objeto de JS 
let string = '{"username": "pepe"}' //Usa comilla doble, esta escrito en formato JSON 
//Transforma al objeto de JS
let stringComoObjeto = JSON.parse(string)
console.log(stringComoObjeto)

* JSON.stringify() // Transforma a su formato texto

let objeto = {
    nombre: 'pepe',
    edad: 20
}
let objetoEnString = JSON.stringify(objeto)

console.log(objetoEnString) //Retorna un string JSON el cual se puede volver a transformr en Objeto
*/

/* Transformar el array historial a string con notacion JSON y motrar por alert
AUTOCORRECCION:
La alerta no debe mostrar: Object object
*/

