//Quiero un programa que dado un nombre me muestre una alerta con el nombre 3 veces.
//Ejemplo 1°: si el nombre es "Juan" me muestre 3 veces  alert "Juan".

//let nombre = 'Juan'

//alert('nombre')
//alert('nombre')
//alert('nombre')

/* Principio DRY dont reapeat you: Repetir demasiadas veces el codigo, si yo quisiera que me muestre 40 alert('nombre') */

//BUCLE FOR: Se usa cuando queremos repetir algo por cierta cantidad de veces.
//Ejemplo 2°: Bucle de conteo

//SINTAXIS: 
//FOR (let iterador = valor_inicial; limite (mientras mi contador sea menor o igual a 3)); actualizacion)
//
/* for(let iterador =1; iterador <= 3; iterador = iterador + 1){
    console.log('me ejecuto')
} */

//PRACTICA: Mostrar por alerta el conteo del 1 al 10, se deben ejecutar 10 alert

/* for (let iterador = 1; iterador <= 10; iterador++) {
    alert(iterador);
  } */

// For seguido variable let seguido i(iterador) = 1;(Condicion de donde quiero empezar) seguido: iterador(dato) <= 10;(condicion) seguido iterador++)
//alert(iterador)sin comillas llamo a la variable

//PRACTICA: Solicitar al usuario un numero 3 veces, mostrar al final de las solicitudes un alert que muestre la sumatoria de los 3 numeros

//dime un numero
//dime otro numero
//dime otro numero

//alert(sumatoria)

/* let sumatoria = 0
for(let iterador = 1; iterador <= 3; iterador =iterador + 1 ){
    let numero = prompt('Dime un numero')
     Agregar validacion de numero para mejorar el e/* jercicio  
 Casos que no tomo numero : null/''/String('pepe)  
 while (!numero || isNaN(numero)){
    numero = prompt('ERROR: vuelve a ingresar el numero')
}
numero = Number(numero) 
sumatoria = sumatoria + numero
 Agregar validacion de numero para mejorar el ejercicio 

alert('Resultado: ' + sumatoria)
 Hace concatenacion me devuelve dato string por el prompt da 0123 ejemplo 

PRACTICA: Solicitar al usuario la cantidad de personas en la clase(numero)Dependiendo dela cantidad de personas de la clase es 5 van a soiciar 5 nombres
Mostrar por alerta los nombres de las personas de la clase en lista.
alert('lista: \npepe  \njuan')}
 */ 
/* let lista = ''
let cantidad = prompt ('Ingrese la cantidad de personas en la clase')
cantidad =  parseFloat(cantidad)
for(let i = 1; i <= cantidad; i = i + 1 ){
    let nombre = prompt('Dime un nombre')
    lista = lista + '-' + nombre + '\n'
    }
    alert('Lista de alumnos: \n' + (lista)) */


//Declaro mi funcion
/* function suma2Mas2(){
    console.log (El resultado de la suma es ' + (2+2)
} */

/* Invocacion o llamada de la funcion: Evita repetir codigo */

/* sumar2Mas2()
sumar2Mas2() */
 /* function sumar(a,b){
    a = a + 1 
    console.log ('Resultado de la suma es ' + ( a + b))
 }
 sumar(9, 8)
 sumar(1, 1) */

/*  function saludar(nombre) {
    alert('Hola ' + nombre )
    }
saludar('pepe') */

/* function restar(a,b){
    return a- b //Retorno se debe utilizar en base a la tarea que tiene mi funcion 
}
 
let numero1 = 10
let numero2 = 5
let resultado = restar (numero1, numero2)
//Devuelve 5 porque asigno los valores 
console.log(resultado) */
//PRACTICA FUNCTION Y RETURN

//CalcularIva(100) =CalcularIva(recibe un precio)=> el valor del iva
//CalcularIva(100) => 21
/* function calcularIva(precio) {
    return precio * 0.21;
  }
  
  console.log("Resultado del cálculo: " + calcularIva(100)) */

  //PRACTICA
  
  /* obtenerNumero()

Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero

Sino debera volver a solicitarlo

Cuando termine de validar se retornara el numero */

/* function obtenerNumero(){
    let num = prompt('ingrese un numero')
    while(!num || isNaN(num)){
        num = prompt('Error: vuelve a ingresar el numero')
    }
    num = Number(num)
    return num
} */


//PRACTICA: calcularMinutos(horas) => cantidad de minutos calcularMinutos(1) => 60

/* function calcularMinutos (horas){
    let minutos = prompt('Ingrese la hora:')
    return minutos * 60
} 
    let horas:any = number {
    return horas * minutos
}
alert('Los minutos por hora son: ' + calcularMinutos(1))
 */
/* let lista = ''
let cantidad = prompt ('Ingrese la cantidad de personas en la clase')
cantidad =  parseFloat(cantidad)
for(let i = 1; i <= cantidad; i = i + 1 ){
    let nombre = prompt('Dime un nombre')
    lista = lista + '-' + nombre + '\n'
    }
    alert('Lista de alumnos: \n' + (lista)) */

/* STRING:

property STRING.LENGTH= Longitud del sring (toma espacios) Cuenta los caracteres
ej: 'pepe'.lenght = 4

(method) STRING.TOLOWERCASE: Cambia de mayus a minuscula.

(method)STRING.UOPPERCASE(): Pasa a mayus.

(method) STRING.trim(): Quita espacios sobrantes. ejemplo: solicito dni 

(method) STRING.includes(string_busqueda): Verifica si el string buscado esta dentro del string. ejemplo: Si dentro de mi string est incluido 'pepe'
(retorna un boolean)

(method) STRING.replaceAll('strin_a_reemplazar_, valor_nuevo): console.log('tv samsung 60p 4k. replaceAll('', '-'))

(method) STRING.reapeat(sring_a_repetir): console.log( 1 . repeat(3)) Iconos tambien repite
repetir contraseña console.log( * . repeat(contra.lenght)) muestra 3 *
*/
 