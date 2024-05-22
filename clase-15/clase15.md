CLASE N° 15 20/05

<!-- Temas de la clase JavaScript clase 4° -->
Datos arrays / objetos.

# ANOTACIONES:

* Camel case: Es escribir con mayusculas 
  ejemplo: 'holaMeLlamoMario'.
* snake_case_ Es escribir con guion bajo 
  ejemplo: 'hola_me_llamo_mario'.
* En español funciones con snake_case y variables con camel case.
* En inglés funciones con camel case y variables con snake_case.
  ejemplo: solicitarYGuardad PREFERENCIA: (solicitar_y_guardad) / requestAndSave.

Si las funciones las hago en camel case no sugiere hacer las variables con la misma escritura.

* JS es un lenguaje de prototipos.

1) Datos objetos:

- Son datos que se pueden modificar.
- Son datos que se pueden agregar.
- Se utiliza coma al final del dato ejemplo: nombre: 'pepe',
- Los objetos los creamos con 'const' ya que podemos reasignar, protege tu  variable pero no inabilita el cambio de dato. 
- La reasignacion con const se hace de esta manera: auto.anio= 2001 / auto.precio= 7000 
- Escritos de propiedades con espacio ( nombre completo) utilizo notacion corchete/ Ejemplo: persona2={nombre:'alan','nombre completo':'Alan Kokoravec'} console.log(persona2['nombre completo']) CASO CORRECTO

* Ejemplo utilizando 3 tipos de variables.
let edad_usuario = 90
let nombre_usuario = 'pepe'
let dinero_usuario = 7000

* Ejemplo utilizando datos objetos (Modelo key value) llaves 
    let usuario ={
    edad: 90,
    nombre: 'pepe'
    dinero: 7000
}
* Metodo de llamada dato objeto:
console.log(usuario.dinero) llamo variable usuario y dentro de mi llave esta dinero llamo por punto.

# PRACTICA 1: Crear un objeto llamado producto que tenga precio nombre, descripcion y marca

    let producto ={
    precio: 1000
    nombre: 'encendedor',
    descripcion: 'encendedor',
    marca: 'cliper',
} 

# PRACTICA 2: Crear un dato objeto llamado persona que tenga nombre, edad y mejorAmigo, mejorAmigo debe ser tro dato objeto que solo tenga nombre y edad.

let persona = {
    nombre: 'pepe',
    edad: 90,
    mejor_amigo: {
        nombre: 'juan',
        edad: 80
        }
}

# PRACTICA 3: Cambiar el nombre del mejor_amigo a 'pepe' y crear la propiedad nro_celular a persona2 + dni a persona2.

const persona2 ={
    nombre: 'Alan',
    edad: 90,
    mejorAmigo: {
        nombre: 'juan',
        edad: 80,
        }
    }
    persona2.dni = '42787597'
    persona2.mejorAmigo.nombre= 'pepe',
    persona2.nroCelular= '1234567890',
    console.log(persona2) //Me devuelve el objeto con los cambios realizados.

# MEJORAMOS EL DATO OBJETO UTILIZANDO const:
const auto = {nombre:'Honda civic Ex', precio: 600000}
auto ='pepe', //Para LET me da undefined.
console.log(auto.nombre) //Me devuelve undefined por lo que sugiere usar CONST en vez de LET.
auto.precio= 7000 //Reasigno con el punto .
console.log(auto.precio) //Me devuelve '7000'

2) Datos arrays:
Los arrays se usan para enlistar elementos, los mismos se conocen como array, lista/list, coleccion/colection, matriz.
Ejemplo:
//Caso sin arrays
let notaTrimertreTres = 9
let notaTrimertreCuatro = 10
let notaTrimestreQuinto= 6

//Caso con arrays:
let notasTrimestres = [9, 10, 6]
* Enlista de manera enumerada.

* Se puede acceder a cada elemento de la lista con el indice (index) los arrays empiezan a contar desde la posicion 0, si yo quiero saber la posicion del 10 deberia saber primero la posicion del mismo (Seria el segundo elemento de i array).

// Lista: [0, 1, 2]

* Si yo quiero llamar mi array en console log:
console.log(notasTrimestres) //Me devuelve [9, 10, 6]
* Si yo quiero llamar mi array en console log y que me devuelva el segundo elemento de mi array:
console.log('El segundo cuatrimestre te sacaste un: ' + notasTrimestres[1]) //Me devuelve 10
* Si yo le pongo console.log(typeof notasTrimestres) // Devuelve object
* Array tiene sus prototipos al igual que los strings(lenght/trim/etc) a estos se los llama metodos.

<!-- METODOS ARRAYS -->

* nombre.pop() //PROPIEDAD POP: Elimina el ultimo elemento y lo retorna (alexis/alex modific)
* nombre.shift()// PROPIEDAD SHIFT: Elimina el primer elemento y lo retorna(pepe).
* nombres.push('leonel') //METODO PUSH: Agrega un nombre al final, me retorna nueva cantidad de elementos
  - Sintaxis:
  nombres.push('leonel')  
  let nuevoLenght = nombres.push('leonel')
  console.log(nuevoLenght)
* nombres.unshift('leonel') //METODO UNSHIFT: Agrega un nombre al prinicipio, me retorna nueva cantidad de elementos
  - Sintaxis:
  nombres.unshift('leonel')  
  let nuevoLenght = nombres.unshift('leonel')
  console.log(nuevoLenght)
<!-- NOMBRES MODIFICADOS POR INDEXOF-->
* Busca en el array y si lo encuentra devuelve la posicion sino devuelve -1, modificaria el primer elemento de array llamado maria.
nombres.indexOd('maria') 
nombres[posicionMaria]='marianela'
console.log(nombres)
<!-- NOMBRES MODIFICADOS POR SPLICE-->
* Elimina un elemento y lo reemplaza por otro, modificaria el primer elemento de array llamado maria.
nombres.splice(0, 1, 'marianela')
console.log(nombres)
- Sintaxis.
Empalma elimina una posicion y emplama con otra
# Como transformo un array a object:
let notasTrimestres = [9, 10, 6]

console.log('el segundo trimestre te sacaste un:'+ notasTrimestre[1])

console.log(Object(notasTrimestre))

# Como modifico mi valor en object :

const notasTrimestre = [9, 10, 6]

notasTrimestre[1]= 4// Cambio el valor de la posicion 1 de 10 a 4

console.log(Object(notasTrimestre))

# CASOS EN ARRAY
<!-- Si yo quiero que ALEX deje de ser Alex y sea ALEXIS, reveo en que posicion esta cada nombre -->
const nombres = {
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
}
nombre[5] = alexis

console.log(nombres) //Devuelve {pepe, juan, maria, pedro, valentina, alexis}
<!-- Si yo quiero  eliminar una posicion -->
const nombres = {
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
}
nombre[5] = alexis
delete nombre [5] //Elimina Alexis pero es una mala practica porque elimino una propiedad que quedara vacia
console.log(nombres) //Devuelve {pepe, juan, maria, pedro, valentina}
<!-- NOMBRES MODIFICADOS POR INDEX -->
* Busca en el array y si lo encuentra devuelve la posicion sino devuelve -1, modificaria el primer elemento de array llamado maria.
nombres.indexOd('maria') 
nombres[posicionMaria]='marianela'
console.log(nombres)