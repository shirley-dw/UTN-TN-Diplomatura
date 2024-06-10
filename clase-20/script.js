//Formas de utilizar los eventos


//Evento click


 // Primera forma de realizar un evento
 /* 
 En mi elemento button en HTML le agrego a la etiqueta de apertura el evento (ONCLICK) y en las ''
 agrego la accion ONCLICK='alertar()' */
/* function alertar (){
alert('Hola desde un evento click')
} 
 */
// Segunda forma de realizar un evento
/* const bntClick2 = document.getElementById("btn-especial")
console.log(bntClick2)
bntClick2.onclick = alertar  */

/* // Otra forma de asignar un evento a un elemento
bntClick2.onclick = function (){
    alert('Hola desde un evento click')
} */

/* 
Formas de llamar al btn por class:

const btnClick3 = document.QuerySelector('.btn')  Selecciona solo el primer elemento con class BTN
const btnClick3 = document.querySelectorAll('.btn')[0] Llama todos los elementos con class BTN y devuelve un array, con [0]
llamo al primer elemento de mi array.
const btn_Click_3 = document.GetElementByClassName('btn')[0] Es la forma mas compleja (No recomendado)
Devuelve tipo de array. [0] Devuelve el primer elemento de mi array

*/

/* const btnClick3 = document.QuerySelector('.btn')  
const btnClick3 = document.getElementById('btn-3')
// addEventListener: Metodo para añadir un evento, requiere saber el evento y que hace cuando sucede
btnClick3.addEventListener('click', alertar)// Se pasa como CallBack la funcion 'alerta' la cual se ejecuta por detras
*/
/* Cuando hagan click en el btn quiero que por consola diga click */

// Otra forma de hacer un evento
/* const btnClick3 = document.QuerySelector('.btn') 
btnClick3.addEventListener('click', function(){
    console.log('click')
})
 */
// Funciones en flecha

/* Van a abreviar la function en flechas cuando su funcion no haga muchas aaciones oque directamente
le funcion retorne 

Ejemplo:

 function hacerTarea (){
 let tipo = prompt('Que tipo de tarea quieres hacer')
 guardarTarea(tipo)
 return tipo
 }

 function calcularIva (iva){
 return iva * 0.21}

*/

/* const alertar2 = () => {
    alert('Hola desde un evento click')
}
alertar2 () */

//Otro ejemplo de function en flecha

/* const sumar = (a,b) => a + b */

/* const validarNumero = (numero) => Boolean (numero) && !isNaN(numero)
console.log(validarNumero('pepe')) */


/* //Function sin abreviatura en flecha
function calcularIva (iva){
    return iva * 0.21}

//Abreviatura en flecha

const calcularIva = (iva) => iva * 0.21;

//Function sin abreviatura en flecha
function hacerTarea (){
let tipo = prompt('Que tipo de tarea quieres hacer')
guardarTarea(tipo)
return tipo
}

//Abreviatura en flecha
const hacerTarea = () => {
guardarTarea(prompt('Que tipo de tarea quieres hacer'));
return prompt('Que tipo de tarea quieres hacer');
};
 */


//Capturar un dato de un input

/* const formularioHTML = document.getElementById('formulario')
formularioHTML.addEventListener('submit', () =>{

}) */

/* Handle investigar funcion que se asocia a un evento 
El primer argumento de una funcion handler hace referencia a un evento */


const formularioHTML = document.getElementById('formulario')
const handleSubmit = (event) =>{
event.preventDefault()//Cancela los comportamientos por defecto que tienen los eventos
console.dir(formularioHTML.dato.value) //Con name="dato" + .value me da el valor/ En name puedo poner cualquier otro valor
}
formularioHTML.addEventListener('submit', handleSubmit)

console.log('El valor actual del del input dato es:'+ formularioHTML.dato.value )