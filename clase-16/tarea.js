/* TAREAS 1°:
Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida"

 TAREA 2°:
Dado los siguientes texto
"hola%20como%20estas,%20todo%bien?"
"no%20me%20siento%20bien"
"que%20mal"
descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar
"el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo"  mas de 18
Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
"el mensaje no es complejo"

TAREA 3°:
solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior.

TAREA 4°:
Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
una maysucula, sino decir "tiene minuscula"

TAREA 5°: 
Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
Ingresá la distancia del recorrido
Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
Las velocidades de los medio de transporte son:
a pie : 5 km/ hs
bicicleta : 10 km/ hs
auto : 50 km/hs

TAREA 6°:
Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
datos con los cuales deben ser enviados a la función
puedeVerPelicula(12, false)
false
 puedeVerPelicula(12, true)
true
 puedeVerPelicula(16, false)
true
 puedeVerPelicula(18, true)
true

TAREA 7°:
Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
datos con los cuales deben ser enviados a la función:
esVocal('a')
true
 esVocal('n')
false
 esVocal('e')
true */

/* DESARROLLO DE EJERCICIOS */

/* TAREAS 1°:
Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida"
 */

/* let url = prompt('Ingrese una url valida:')
while(url == ''|| url == null)
    {
        url = prompt('Ingrese una url valida:')
        }
        if(url.includes('https://'))
            {
                console.log('La url ingresada, cuenta con certificado ssl')
                }
                else if(url.includes('http://'))
                    {
                        console.log('La url ingresada no cuenta con certificado ssl')
                        }
                        else if(!url.includes('http://') || !urlIngresada.includes('https://')){
                            console.log('No has ingresado una url valida')
                        } */


/*  TAREA 2°:
Dado los siguientes texto
"hola%20como%20estas,%20todo%bien?"
"no%20me%20siento%20bien"
"que%20mal"
descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar
"el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo"  mas de 18
Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
"el mensaje no es complejo" */

/* let codigoUno = "hola%20como%20estas,%20todo%20bien?"
let codigoDos = "no%20me%20siento%20bien"
let codigoTres = "que%20mal"

function descifrarCodigo(codigoCifrado){
    let codigoDescifrado = codigoCifrado.replaceAll('%20',' ');
    return codigoDescifrado
}

console.log('El código descifrado es: \n\n'+'- '+descifrarCodigo(codigoUno)+' \n'+'- '+ 
descifrarCodigo(codigoDos)+ ' \n'+'- '+descifrarCodigo(codigoTres))

function contadorDeCaracteres(codigo){
    let contador = 0;
    for(let i = 0; i< codigo.length ;i++){
        if(codigo[i]!==' '){
            contador += 1
        }
    }
    if(contador <= 8 && contador >= 1){
        console.log("El mensaje es corto")
    }
    else if(contador <= 9 && contador >= 18){
        console.log("El mensaje es mediano")
    }
    else{
        console.log("El mensaje es largo")
    }

    if(codigo.includes(",", "@", "-")){
        console.log("El mensaje es complejo")
    }
    else{
        console.log("El mensaje no es complejo")
    }
} 

console.log('Mensaje 1°: ')
contadorDeCaracteres(codigoUno)
console.log('Mensaje 2°: ')
contadorDeCaracteres(codigoDos)
console.log('Mensaje 3°: ')
contadorDeCaracteres(codigoTres) */

/* TAREA 3°:
solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior. */

/* let mensaje = prompt('Ingrese su mensaje:')
let mensajeCifrado = mensaje.replaceAll(' ','%20')
console.log('El mensaje cifrado es: '+mensajeCifrado)
function descifrarCodigo(mensajeCifrado){
    let codigoDescifrado = mensajeCifrado.replaceAll('%20',' ');
    return codigoDescifrado
}
console.log('El mensaje descifrado es: '+ descifrarCodigo(mensajeCifrado))  */


/* TAREA 4°:
Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
una maysucula, sino decir "tiene minuscula"  */

/* let palabra = prompt('Ingrese una palabra:')
if(palabra === palabra.toUpperCase()){ //toUpperCase transforma a mayusculas
    console.log('La palabra tiene mayusculas')
    }
    else{
        console.log('La palabra tiene minusculas')
        }  */
/* TAREA 5°: 
Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
Ingresá la distancia del recorrido
Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido 
en distintos medios de transporte y luego mostrarlo mediante el 
siguiente mensaje en lista con '- ': Para la distancia {distancia} km en bicicleta el tiempo de viaje es 
{resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
Las velocidades de los medio de transporte son:
a pie : 5 km/ hs
bicicleta : 10 km/ hs
auto : 50 km/hs*/

/* let distancia = prompt('Ingrese la distancia del recorrido:')
let tiempoBicicleta = distancia/10
let tiempoAPie = distancia/5
let tiempoEnAuto = distancia/50
console.log(`Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${tiempoBicicleta} horas, a pie ${tiempoAPie} hora/s y en auto ${tiempoEnAuto} hora/s`)
 */

/* TAREA 6°:
Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion,
 y retorne true si la persona está habilitada para ver la película o false si no. 
 Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
datos con los cuales deben ser enviados a la función
puedeVerPelicula(12, false)
false
 puedeVerPelicula(12, flase)
true
 puedeVerPelicula(16, true)
true
 puedeVerPelicula(18, true)
true */

/*  function puedeVerPelicula (edad, tieneAutorizacion){
    if(edad >= 15 || tieneAutorizacion === true){
        return true
        }
        else{
            return false
            }
            }
            console.log(puedeVerPelicula(12, false))
            console.log(puedeVerPelicula(16, true))
            console.log(puedeVerPelicula(18, true)) */


/* TAREA 7°:
Solicita una letra al usuario y 
Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
datos con los cuales deben ser enviados a la función:
esVocal('a')
true
 esVocal('n')
false
 esVocal('e')
true */ 


/* function esVocal(letra){
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        return true
    }
    else{
        return false
    }
    }
    console.log(esVocal('a'))
    console.log(esVocal('n'))
    console.log(esVocal('e')) */


