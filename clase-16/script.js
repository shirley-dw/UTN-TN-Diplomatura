//PRACTICA 1: Por cada nombre quiero que aparezca un mensaje por consola diciendome hola 'name'

/* const names =['pepe','juan','maria']
console.log('hola' + names[0])
console.log('hola' + names[1])
console.log('hola' + names[2]) */

// De esta manera el dia que quiera modificar debere agregar un console log agregando 1 posicion.


// Quiero que un contador del 0 al 4 que salude a cada name

/* const nombres =['pepe','juan','maria','ezequiel'];


for(let index = 0; index < nombres.length; index = index + 1){
    let nombres = nombres[index]
    console.log('hola' + nombres[iterador])
} */

/* PRACTICA 2: Por cada elemento de mi carrito mostrar en consola 'Has comprado el producto'
 {producto.nombre} x {producto.cantidad} a un precio unitario de ${producto.precio} */

/*  const carrito = [
    {
        nombre: 'camisa',
        precio: 300,
        cantidad: 2
    },
    {
        nombre: 'pantalon',
        precio: 400,
        cantidad: 1
        },
    ]

    for(let index = 0; index < carrito.length; index = index + 1){
        const producto = carrito[index]
        console.log(producto)
        console.log('Has comprado el producto' + producto.nombre + 'x' + producto.cantidad + 'a un precio unitario de $ ' +
        producto.precio)
    } */

/* PRACTICA 3°: Por cada personaje moestrar el siguiente mensaje por consola: Hola mi nombre es {personaje.nombre}
{personje.apellido}y tengo {personaje.edad} */

//Al finalizar moestrar la sumatoria de edades:

/* let sumatoriaEdad = 0
const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]

for(let index = 0; index < personajes.length; index = index + 1){
    const personaje = personajes[index] 
    console.log('Hola mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años')
    sumatoriaEdad= sumatoriaEdad + personaje.edad
}
console.log('La sumatoria de edades es ' + sumatoriaEdad)  */

//Total de edades: {totalEdades}= 64 result

//PRACTICA 3° RESOLUCION PROFESOR:

 const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]
for(let index = 0; index < personajes.length; index = index + 1){
    console.log(personajes[index])
}// FORMA CONVENCIONAL

for(const personaje of personajes){
    console.log(personaje)
} // SIMPLIFICA EL FOR DE ARRIBA

//FOR OF RECORRE TODO EL ARRAY. 

/*
    
PRACTICA 4°: Ir al ejercicio anterior y realizarlo con FOR OF */

/* const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]

for(const personaje of personajes){
    console.log(personaje);
} */

//Ejercico 2° con FOR OF(Recorrer el array)
/* const carrito = [
    {
        nombre: 'camisa',
        precio: 300,
        cantidad: 2
    },
    {
        nombre: 'pantalon',
        precio: 400,
        cantidad: 1
        },
    ]
    for(const producto of carrito){
        console.log(producto);
        } */


//FOR IN recorre las keys[PROPIEDADES] (objetos)

/* const datos={
    nombre: 'pepe',
    apellido: 'suarez',
    dni: '42787597'
}
let resultado = ''
for(let propiedad in datos){
resultado = resultado + '\n' + propiedad + ':' + datos [propiedad];
}
console.log(resultado); */

//METODOS AVANZADOS DE ARRAY:

//FOREACH: Hace que muestre el objeto (propiedad) de cada personaje

/* const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]
 for(const personaje of personajes){
    console.log(personaje); }*/

    //Simplificado

/* function hacer{}// Es necesaria la funcion */

/* personajes.forEach(function (personaje){
    console.log(personaje);
})

const personajesMayoresDeEdad = personajes.filter(function(personaje){
return personaje.edad >=18
})

console.log(personajesMayoresDeEdad) */

/* FILTER: Es un metodo avanzado a metodo que recibe una callback
que es una funcion que recibe al elemento y si el valor de retorno de la callback es truly entonces el elemento se agregara
al array resultante . Si el vaor de retorno de la callback es falsy se retornara(pasamos al siguiente elmento)
SIEMPRE RETORNA UN ARRAY
Si el array es vacio significa que no cumple la condicion(NADIE PASO EL FILTRO)*/


//PRACTICA 5° con FILTER:
/*
-Traer los productos que sean de precio inferior a 2950
-Traer los productos de la marca noblex
-Traer los productos que en su nombre incluyan el string 'tv'
*/

/* const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tv LG',
        marca: 'LG',
        id: 2,
        precio: 2900
    },
    {
        nombre: 'tv noblex',
        marca: 'noblex',
        id: 3,
        precio: 2300
    },
]

const productosPrecio = productos.filter(function(producto){
    return (producto.precio < 2950)
})
console.log(productosPrecio)

const productosMarca = productos.filter(function(productos){
    return (productos.marca.toLowerCase() === 'noblex'.toLowerCase())
})
console.log(productosMarca)

const productosTv = productos.filter(function(productos){
    return (productos.nombre.toLowerCase().includes('tv'.toLowerCase()))//Uso toLowerCase para minusculas
    })

console.log(productosTv) */
    
//Si yo quiero encontrar especificamente un producto lo realizo con una busqueda.


/* FIND: Es un metodo avanzado a metodo que recibe una callback
que es una funcion que recibe al elemento y si el valor de retorno de la callback es thurty entonces el
elemento se retorna y se corta FIND . Si el vaor de retorno de la callback es falsy se ignora
(pasaremos al siguiente elemento)
FIND puede retornar el elemento o undefined(Si no encuentra un elemento)*/

/* const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]
const pepe = personajes.find (function(personaje){
    return (personaje.nombre.toLowerCase() === 'pepe'.toLowerCase())
})
 for(const personaje of personajes){
    console.log(personaje); }

function hacer{
}

personajes.forEach(function (personaje){
    console.log(personaje);
})

const personajesMayoresDeEdad = personajes.filter(function(personaje){
return personaje.edad >=18
})

console.log(personajesMayoresDeEdad)  */