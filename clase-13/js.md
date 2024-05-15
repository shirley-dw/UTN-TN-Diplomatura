CLASE 13° 13/05

Coneto mi pagina poniendo sobre el atributo de cierre de mi body [Script src='./direcciondemijs']{script}.
Esto enlaza mi JS con mi HTML.

# Anotaciones:
Si una funcion no retorna nada, por defecto retorna UNDEFINED.
- Cualquier dato que sea negado con ! me devuelve el valor opuesto si es true devuelve false.


# FUNCIONES NATIVAS
Son funciones incorporadas a Js

* -isNaN (ES UNA FUNCION NATIVA): Es una funcion que recibe un dato y te devuelve un boolean(true/false) y te indica si es o no un NaN.

* -alert(string): Es una funcion que recibe un string y lo muestra me un pop up (mensaje de alerta/ventana emergente) en la pagina.Se utiliza de forma para mostrar datos o alertas. Tranforma el dato y te lo muestra formato string. NO TIENE RETORNO.
¿Como hago para saber el retorno de -alert?
-alert(El valor de retono de alert es: ' + variable)<!-- Devuelve undefined -->

* typeof(): Nos dice el tipo de dato que es
- alert(typeof (3+'')): Es un string ya que hay una concatenacion, se transforma en '3'
* prompt (): es una funcion que recibe un mensaje y devuelve el valor ingresado por el usuario (tipostring) o null en el 
caso que el usuario de al boton cancelar  
 - Sintaxis: let dato = prompt ('pepe')
alert('el valor ingresado es: ' + dato)

let edad = prompt('¿Cuantos años tiene')
dato = Number(dato)
alert(dato)
 

* parseFloat (): transofrma un numero a su formato decimal */
* parseInt: no respeta el formato flotante sino que lo transforma a entero trunqueandolo (parse=transformar/int=entero)

 IF : TRUE O FALSE
 
 - Sintaxis: if(condicion){
    bloque de codigo
 }

if(edad>=18){
    alert("Es mayor de edad")
}
else{
    alert('No es mayor de edad)
}

# while:
- Sintaxis: while(condicion){
    bloque de codigo
    }
    while(edad<18){
        alert('No es mayor de edad')
        }
While lo que hace es un bucle.
