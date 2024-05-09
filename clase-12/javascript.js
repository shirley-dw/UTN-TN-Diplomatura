console.log (!'pepe')
/* ! SIMBOLO DE NOT / NEGACION DA EL RESULTADO OPUESTO */

console.log ('pepe' || 0)
/* SI EL PRIMER VALOR ES FALSY SELECCIONA EL SEGUNDO VALOR/ SI ES VERDADERO SELECCIONA EL PRIMER VALOR */

console.log(0 || false)
/*Este codigo devuelve '0', porque el primer valor es falso, por lo tanto se pasa al segundo valor*/

console.log (0 || false || null)
/*Devuelve 'null' porque el primero es falso y el siguiente es falso, pero no hay otro valor para elegir*/

console.log (Boolean (0 || false || null))
/* Devuelve 'false' porque la función Boolean() convierte un valor a su equivalente booleano: true o false*/

console.log (0 && 7)
/* Si el primero es falso selecciona el primer valor/ Si es true devuelve el segundo valor */

console.log (7 && 0)
/* Devuelve '0' porque el primer valor es verdadero, pero el segundo es falso */

console.log (1 && 1 && 'pepe')
/* Devuelve 'pepe' porque los dos primeros valores son verdaderos (true) */

console.log(4 || 'pepe')
/* Devuelve '4' porque el primer valor es true*/

console.log (4 && 'pepe')
/* En este caso, el operador AND devuelve 'pepe' (string comillas) porque el número  4 es verdadero */

console.log (8 == '8')
/* Compara si ambos valores tienen el mismo tipo de dato y si sus valores son iguales devuelve un boolean true*/

console.log (null=== NaN) /* NaN tipo de dato number/ Null sin dato */
/* Devuelve false porque NaN no tiene equivalente ya que no es igual a nadie, no se puede comparar con ningun otro dato */



 /* VARIABLES */


 var edad = 50
 edad = 'pepe'/* REASIGNO EL DATO */
 console.log(edad)
 /* Resultado 50 = mi caja de var contiene el dato 50 */

 var nombre = 'pepe' /* DECLARACION DE VARIABLE */
 nombre = juan
 /* REASIGNA EL NOMBRE Y DA EL ERROR UNDEFINED SI PONGO CONSOLE.LOG ANTES DE DECLARAR LA VARIABLE */

 let nombre = 'pepe'
 nombre = 'julieta'
 console.log(nombre)
 /* El resultado será "julieta" ya que con let se puede reasignar el valor de una variable y no da error undefined */
 /* Resultado julieta = La variable se ha reasignado con otro valor */

 let nombre = 'pepe'
 /* Si pongo el valor debajo de console.log no lo llama */

 { 
    let nombre = 'juan'
/* al crear un nuevo bloque de nombre con las llaves reasigno el nombre */
 }
 console.log (nombre)

 let nombre ='pepe'
{
    let nombre = 'juan'
    console.log(nombre)
    {
        let nombre = 'maria'
        console.log(nombre)
    }
    console.log (nombre)
}

/* RESULTADO: 1° PEPE 2° JUAN 3° PEPE 4° MARIA */