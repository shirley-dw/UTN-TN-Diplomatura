/* -isNaN () Es una funcion que recibe un dato y te devuelve un boolean(true/false) y te indica si es o no un NaN 
*/
/* Funcion -alert (string)es una funcion que recibe uns tring y lo muestra en un pop up en la pagina, no tiene retorno */

/* let variable= alert('pepe')//devuelve undefined
alert ('el valor de alert es =´+variable') */

/* alert(typeof (3+'')) */

/* prompt(): es una funcion que recibe un mensaje y devuelve el valor ingresado por el usuario (tipostring) o null en el 
caso que el usuario de al boton cancelar  */
/* let dato = prompt ('pepe')
alert('el valor ingresado es: ' + dato) */

/* let edad = prompt('¿Cuantos años tiene')
dato = Number(dato)
alert(dato)
 */

/* parseFloat (): transofrma un numero a su formato decimal */
/* parseInt: no respeta el formato flotante sino que lo transforma a entero trunqueandolo (parse=transformar/int=entero*/

// CASO NO MEJORADO//
/* El dato no debe ser null o '' */
 /*  let dato = prompt ('dime algo')
 if(dato === (Or) null ||(estricta igualdad ) '')
    {
 alert('ERROR: Dato no valido')
}
 else { 
    alert ('todo esta bien')
 }  */

 //CASO MEJORADO//
 /*  let dato = prompt ('dime algo')
 if(!dato)
    {
 alert('ERROR: Dato no valido')
}
 else { 
    alert ('todo esta bien')
 }  */

/*  EJERCICIOS */
/* Uno */
/* let tienehijos = true
alert(tienehijos)
 /* Dos */
/*/*let salario = prompt('salario actual')
{
   alert(salario * 12 + '=salario anual')
}
/* Tres */
/*let edad = 20
if(edad >= 18){
   console.log('Eres mayor de edad')
}
   else {
      alert ('Eres menor de edad')
   } */
/*  Si el puntaje da entre 0 y 1000 dira 'principiante'
 Si el puntaje da entre 1000 y 3000 diremos 'avanzado/a'
 Si el puntaje es mayor a 3000 diremos 'experimentado/a'
 */ 
/* SOLUCION */

/* let(puntos >= 0 && puntos <= 1000)
{
    alert('principiante')
}
else if(puntos = 1000 && puntos <=3000)
    {
    alert('Avanzado/a')
}
else if( puntos > 3000 ){
    alert('Experto/a')
} */


/* DRY: Dont reapeat yourself = no  te repitas */
/*  */
/* let nombre = prompt ('Ingrese su nombre')
while (!nombre){
    alert('error dato no valido')

} */

/* 
let nombre = prompt ('Ingrese su nombre')

if (nombre === 'pepe'){
    nombre = prompt ('Ingrese de vuelta un nombre')
    if (nombre === 'pepe'){
        nombre = prompt ('Ingrese de vuelta un nombre')
    }
    else{
        alert('ese nombre no lo conozco')
    }
}
else{
    alert('ese nombre no lo conozco')
} */
