/* let notaTrimertreTres = 9
let notaTrimertreCuatro = 10
let notaTrimestreQuinto= 6

//Caso con arrays:
let notasTrimestres = [9, 10, 6]

console.log('el segundo trimestre te sacaste un:'+ notasTrimestre[1]) 
/* 
const notasTrimestre = [9, 10, 6]

notasTrimestre[1]= 4// Cambio el valor de la posicion 1 de 10 a 4

console.log(Object(notasTrimestre)) */
/* 
//Array escrito en formato 
let notasTrimestre= {
    0: 9,
    1: 10,
    2: 6,
    length: 3
}
console.log(notas[2]) // Devuelve 6 */

//METODOS ARRAYS

/* const nombres = {
    'pepe':
    'juan':
    'maria':
    'pedro':
    'valentina':
    'alex':
}

//Si yo quiero que ALEX deje de ser Alex y sea ALEXIS, reveo en que posicion esta cada nombre

nombre[5] = alexis

console.log(nombres) //Devuelve {pepe, juan, maria, pedro, valentina, alexis} */


/* const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]
nombres.splice(nombres.indexOf('juan'),1)// Me dice 1 porque elimino solo un elemento, si pongo 2 elimina 2 juan
nombres.splice(nombres.indexOf('maria'),1)
//Elimina dos posiciones sin saber la posicion de cada uno  */

//El caso correcto descumple el prinicipio DRY

/* const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]
nombres.splice(nombres.indexOf('juan'),1)
nombres.splice(nombres.indexOf('maria'),1) */
// Caso correcto sin descumplir DRY

/* function eliminarNombre(listaDeNombres, nombreAEliminar){ //Me dice que de la lista de nombre hay uno a eliminar
    listaDeNombres.splice(listaDeNombres.indexOf(nombreAEliminar, 1))//De esa lista con splice busca la posicion
}//con indexOF indico la posicion que quiero eliminar */

// Descumple keep it simple: mantenlo sencillo
/* function eliminarNombre(a, b){
    a.splice(a.indexOf(b), 1)
}  */


