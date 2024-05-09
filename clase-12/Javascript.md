CLASE 12° 08/05 JAVASCRIPT

# TEMAS DE LA CLASE: Datos, comparadores, operadores logicos, variables, condicion. (JAVASCRIPT)

# OPERADORES LOGICOS: 
1) ! (simbolo): NOT O NEGACION (Nos da el valor booleano opuesto al dato que estoy negando)
Si yo niego pepe me va a decir true y en biseversa.
* Sintaxis: console.log (!'pepe')

2) ||: OR o O (Si el valor es un valor FALSY va a seleccionar el segundo valor/ Si el primer valor es verdadero va a seleccionar el primer valor) Hace una seleccion .
* Sintaxis: console.log ('pepe' || 0)
            /* SI EL PRIMER VALOR ES FALSY SELECCIONA EL SEGUNDO VALOR/ SI ES VERDADERO SELECCIONA EL PRIMER VALOR */
            console.log (Boolean (0 || false || null))
            /* Devuelve 'false' porque la función Boolean() convierte un valor a su equivalente booleano: true o false*/
            console.log (0 || false || null)
            /*Devuelve 'null' porque el primero es falso y el siguiente es falso, pero no hay otro valor para elegir*/
OR NECESITA DE UN VALOR VERDADERO PARA DEVOLVER TRUE SI TODOS SON FALSOS DEVUELVE FALSE.

3) &&: AND O y logico (Permite condicionar, se comporta como una condicion, lo que hace es seleccionar o evaluar)
* Si es true devuelve el segundo valor.
* Si es false devuelve el primer valor
- Sintaxis: console.log (0 && 7)
            /* Si el primero es falso selecciona el primer valor/ Si es true devuelve el segundo valor */
            console.log (7 && 0)
            /* Devuelve '0' porque el primer valor es verdadero, pero el segundo es falso */
            console.log (1 && 1 && 'pepe')
            /* Devuelve 'pepe' porque los dos primeros valores son verdaderos (true) */

4) Valores FALSY:
false/ -0 / ''/ undefinded/ NaN / Null

5) Tablas de la verdad:
 # AND: Si es true devuelve el segundo valor, si es false devuelve el primer valor
* Si es false devuelve el primer valor
 true && true: true
 true && false: false
 false && true: false
 false && false: false

# OR: Si el valor es un valor FALSY va a seleccionar el segundo valor/ Si el primer valor es verdadero va a seleccionar el primer valor.
 true || true: true
 true || false: true
 false || true: true
 false || false: false
  
                                         VARIABLES

Es un espacio reservado que almacena un dado (REFERENCIA), este debe tener un identificado el cual usaremos para obtener el dato.
* Sintaxis: var edad = 50
            console.log(edad)
            La variable se crea con "var" y luego le asignamos un nombre y un valor.


<!-- JAVASCRIPT ES UN LENGUAJE DEBILMENTE TIPADO Y DE TIPADO DINAMICO -->
 No necesitas indicarle al lenguaje que tipo de dato va a tener una variable, solo debes darle un nombre y
 Es decir que no necesitas declarar el tipo de dato al momento de asignarlo a una variable-->

# SINTAXIS:
* [Tipo de variable + identificador + dato]

 # TIPOS DE VARIABLES: VAR / LET / CONST
 - Tiene hosting?
 - Se puede resignar?
 - Se puede redeclarar?
 - Valor implicito en undefind?
 
  # VAR (ES5):
  
  El alcance de var siempre es global, lo puedo llamar por fuera o dentro de un bloque.
 - Tiene hosting, puedo llamar a la variable antes de su declaracion? <!-- SI -->
 - Se puede resignar?  <!-- SI -->
 - Se puede redeclarar? <!--  SI -->
 - Valor implicito en undefind? <!-- SI -->

<!--  HOSTING VAR: Declaracion es cuando creamos nuestra variable, es la capacidad de una variable de ser llamada antes de su declaracion. -->
 Ejemplo: 1. - var = edad : Estoy declarando la variable con el identificador edad.
             - console.log(edad)
          2. - console.log(edad)
             - var = edad        
              Si intento hacer esto me dice que edad esta definida pero no fue declarada.

<!-- SE PUEDE REASIGNAR -->
Ejemplo: 1. - console.log(nombre)
            - var nombre = 'pepe'
            - nombre = juan
              Reasigna el nombre y muestra el error UNDEFINDE si pongo CONSOLE.LOG antes de declarar la variable.

# LET (ES6+):
 - Tiene hosting, puedo llamar a la variable antes de su declaracion? <!-- NO -->
 - Se puede resignar?  <!-- SE PUEDE -->
 - Se puede redeclarar? <!--  NO EN 1 SOLO BLOQUE-->
 - Valor implicito en undefind? <!-- SI -->

<!--  HOSTING LET: Declaracion es cuando creamos nuestra variable, es la capacidad de una variable de ser llamada antes de su declaracion. -->
No tiene hosting en let.

<!-- SE PUEDE REDECLARAR -->
En un solo bloque no se puede redeclarar por ahora.
Ejemplo: 1. - let nombre
            - let = nombre ('pepe')
            - nombre = 'julieta'
            - console.log (nombre)
              Me da error porque ya existe una variable llamada nombre.

<!-- SE PUEDE REASIGNAR -->
 Pero si lo hacemos dentro de diferentes bloques o funciones podemos volverlo a utilizar.

# CONST (ES6+):
- Tiene hosting, puedo llamar a la variable antes de su declaracion? <!-- NO -->
 - Se puede resignar?  <!-- NO -->
 - Se puede redeclarar? <!--  NO EN 1 SOLO BLOQUE-->
 - Valor implicito en undefind? <!-- NO -->

 # Que es un bloque?
 {AL CREAR LLAVES CREO UN NUEVO BLOQUE DE CODIGO}
 Un bloque es cualquier estructura de control que agrupa varias sentencias y las ejecuta como una sola unidad lógica.
 Es como un cajon donde guardamos nuestras cosas.

 # HOSTING:
 El hosting es el lugar donde vive la variable mientras estamos trabajando con ella.
 En el caso del var, al crearnos una variable con var=valor, la variable va a tener un hosting temporal.
 Luego cuando terminemos de usarla, desaparece.
 Con const y let, tenemos un hosting permanente para esa variable.
 La diferencia entre los dos es que con const no podremos cambiarle el valor pero sí su referencia.
 Si queremos cambiar el valor debemos hacer un nuevo asignación.

 ## Ventajas de las variables let y const:
 Son más seguras que var.
 No nos permiten darles valores sin asignarlos primero.
 Las variables const son inmutables.