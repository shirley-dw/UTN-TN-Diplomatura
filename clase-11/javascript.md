CLASE 11° 06/05

JavaScript: introduccion historica y otros conceptos.
1) Historia de los lenguajes de programacion.
2) Que es un lenguaje de programacion?
3) Caracteristicas de JavaScript.
4) Ventajas e inconvenientes de JavaScript.

# Historia de los Lenguajes de Programación:
-----------------------------------------
Los orígenes del lenguaje de programación se remontan a la década de los sesenta, con el desarrollo del lenguaje de máquina llamado "NAT". 
Luego nacen las tablas que desarrollan un programa, las cartas o tablas tenian un problema (las polillas)
las cuales generaban un bug, sumado a la humedad y otros factores.
Forfran es el siguiente lenguaje y el primero en desarrollarse digitalizado.
A partir del Forfran nace BASIC, este tiene una interfaz gráfica para poder interactuar con el computador.
Este fue seguido por COBOL, LISP, Pascal, Ada, Fortran entre otros.
En la actualidad existen miles de lenguajes de programación, pero todos tienen como base al algoritmo, uno de los primeros lenguajes.
Netscape: Fue uno de los primeros navegadores que incluye un lenguaje de programacion dentro de la web llamado  MOCHA luego LIVESCRIPT en 1995, el cual posteriormente se llamo Java Script.

# ¿Que es un algoritmo?
 Es una secuencia de operaciones que realizan tareas simples pero complejas. Funcionan como pasos para ejecutar lo que deseamos.

# ¿Que es JavaScript?

* JavaScript: Es un lenguaje de programacion interpretado por el motor V8ENGINE creado en C++, comunicamos y damos ordenes al computador o navegador para que ejecuten tales acciones y nos den ciertos resultados. Es un lenguaje de funcionalidad.
 Un lenguaje de programacion nos sirve para dar ordenes ejecutables, son lenguajes lejibles para una computadora. 
 Es un lenguaje de alto nivel que se ejecuta en el navegador.
 Es un lenguaje CASE SENSITIVE entiende las diferencias entre mayusculas y minusculas.

 # Ventajas de Java Script:
 - Es facil de aprender y usar.
 - Facil para integrar HTML con CSS.
 - Permite una gran interacción entre el usuario y el sitio web.

 # Inconvenientes de Java Script:
 - No tiene tipado estático lo cual puede ser ventaja o desventaja dependiendo del caso.
 - Puede ser vulnerable a ataques por inyección SQL.
 - La carga de JavaScript se realiza después de que el navegador haya renderizado todo el contenido de la    pagina. 
 - Algunas funciones no son tan potentes como otros lenguajes.´

 # ¿Como se escribe javascript?
 <!-- Tipos de datos -->
 Representan informacion, tienen distintos tipos, hay de dos categorias:
 * Primitivos: Number, String, Boolean, Undefined, Null.
 * Objeto: Un conjunto de propiedades y metodos.
 
 # Datos primitivos:
 * number: Numeros como los conocemos nosotros
 Ejemplo: 0, 8, -2, 3.14 (No es decimal, es flotante (float)), Nan, infinity.
 * string: Textos, deben ir entre comillas, dobles, simples o invertidas.
 Ejemplo 'hola.mundo'/'pepe'/'8'/'NaN'
 * boolean: Verdadero (true), Falso (false) Solo hay dos valores posibles.
 Ejemplo: true/false
 * null: Ausencia o nulidad de un dato.
 Ejemplo: null
 * undefined: Sin definir o sin valor.
 Ejemplo: undefined

 # Diferencia entre null y udefined: 
 La diferencia radica en que si bien ambos representan ausencia de información, el undefined indica que no ha sido asignado un valor.

   Ejemplo: Soy un mensajero que envia una carta, llego a la casa me atienden y me dicen que no quieren recibir la carta.
   <!-- estado_de_respuesta= false -->
   Ejemplo: Soy un mensajero que envia una carta, llego a la casa me atienden y me dicen que quieren recibir la carta.
   <!-- estado_de_respuesta= true -->
   Ejemplo: Soy un mensajero que envia una carta, me extravio en el viaje
   <!-- estado-de_respuesta= undefinde -->
   Ejemplo: Soy un mensajero que envia una carta, llego a la casa y no me atienden.
   <!-- estado_de_respuesta= null -->

   Estado:  UNDEFINED / Mensajero sale de mensajeria
            Mensajero llega/ estado: null

# Constructores:
* String: (dato): Transforma mi dato a string.

# Operadores aritmeticos: 
<!-- Siempre devuelve strings  -->
+:Concatenacion: La concatenacion ocurre cuando uno de los tipos de datos es una STRING.
Ejemplo: 'hola' + 1
Proceso interno: 'hola' + String (1) Se realiza automaticamente.
Proceso interno: 'hola' + '1'
Resultado: hola1 

Concatenacion: Llamamos a cualquier operacion que tenga un + y un string
Javascript: Concatena automaticamente con que tenga un solo string, si yo tengo un numero.
Ejemplo: String (1) {CON MAYUSCULA INICIAL}
'1' (Dato string)
<!-- Siempre devuelven numeros -->
+ Suma: (No debe haber un string)
1 + true : Tipos de datos distintos. Si fuerzo a true a darme un numero me va a dar un uno. True equivale a 1 / false a 0
Proceso interno: 9 + number (true=1)
Proceso interno:  9 + 1
Resultado: 10 
* undefined + 1 = NaN : Lo utiliza Javascript cuando no puede resolver. Nunca va a aparecer en una concatenacion porque es un numero y la misma necesita un string.

- Resta
Siempre devuelve un numero por mas que halla un string. ('3') Se lo conoce como string numerico ya que devuelve un numero.


* Multiplicación

/ Division 
% Resto de la division o MODULO

# Falsy o truthy: 
En javascript hay valores falsos o verdadero. Los valores falsos son: false,  undefined, null, 0, "", NaN, -0.
Los valores verdaderos son infinitos. Si un dato al pasarlo por boolean me da false, es un valor FALSY. Si me da true es TRUTHY.
Ejemplo: Boolean (9)
         TRUE

         Boolean (-0)
         Null

# COMPARADORES:
 Siempre devuelven booleanos.

 ==  es igual a
 Ejemplo: 1 == 0 devuelve false uno no es igual a 0. 1 == 1 devuelve true. UNO ES IGUAL A TRUE   

 === estricta igualdad
 Ejemplo: 1 === '1' devuelve false. '1' === '1' devuelve true porque es el mismo tipo de dato. (Compara igualdad en valor y tipo de dato)

 != Diferencia 
 
 !== Estricta diferencia
 <
 <=
 

# TYPEOF: (Me va a decir que tipo de dato es)

<!-- NaN no puede ser comparado con ningun otro dato -->

# IsNaN me dice si es un not a number : 
Devuelve booleano dependiendo si es un NaN o no
Ejemplo: IsNaN (8)
         false

         IsNaN (true)
         false 

         IsNaN ("Hola")
         false

         IsNaN (NaN)
         true
<!-- NULL NO PUEDE SER IGUAL A OTRO DATO -->
Ejemplo: Null == Null
         true

         Null== Undefined
         true