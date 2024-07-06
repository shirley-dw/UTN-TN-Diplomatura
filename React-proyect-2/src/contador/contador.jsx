import React from "react";
let contador = 1
//No utilizar a document a menos que sea ESTRICTAMENTE NECESARIO
const [valor, fnCambiadora] = UseState() // Desestructuracion del array con UseState
//const [valor, fnCambiadora] = React.useState(0) // Desestructuracion de inicio.
//const [valor, fnCambiadora] = React.useState({}) // Desestructuracion de objeto.
//const [valor, fnCambiadora] = React.useState([]) // Desestructuracion de array.

// fnCambiadora: Mi pagina reacciona al cambio de estado ya que no se puede resignar un valor: const incrementar = () => { valor = valor + 1}

const incrementar = () => {
    fnCambiadora(valor + 1) //Recarga solo el componente y a sus hijos
}
return(
    <>
    <img src="" alt="" />
    <span>Contador:{valor}</span>
<button onClick={incrementar}>Incrementar</button>
</>
)
/* React siempre que pueda re-renderizarme lo va a hacer */

/* 
Estado:
UseState : Lo usamos para crear un estado, retorna un array donde el primer elemento va a ser el valor actual del estado y 
el segundo estado es una function para cambiar el valor del estado. Esta se debe importar.
UseState debe recibir un valor. Los estados se crean dentro del componente.

Ejemplo : const [] = UseState() 


# Assignament to constant variable: Error de desestructuracion, reasignar una constante no se puede, es invalido.

# Operador Ternario:
Si mi contador es  === 0 ?(Entonces) : (Sino) 
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
Sintaxis:
condición ? expr1 : expr2

Una expresión que se evalúa como true o false.

expr1, expr2
Expresión con valores de algún tipo.

Descripción
Si la condición es true, el operador retorna el valor de la expr1; de lo contrario, devuelve el valor de expr2. Por ejemplo, para mostrar un mensaje diferente en función del valor de la variable isMember, se puede usar esta declaración:

Ejemplo:
 return (
        <div>
            {
                contador === 0 
                ? (<button onClick={handleIncrementar}>Comprar</button>)
                : (
                    <>
                        <button onClick={handleDecrementar}>-</button>
                        <span>{contador}</span>
                        <button onClick={handleIncrementar}>+</button>
                    </>
                )
            }

# Operador corto circuito IF SIMPLE:
{contador > 1 && <h2> Sigue, comprando </h2>}
Condiciones simples.
*/


/* Crear un componente contador que renderize:
boton decrementar
span con valor de contador
boton incrementar
el contador no puede estar en 0 y su limit debe ser 10 maximo

<Contador liimt ={10}/>
 */




/* function Contador () {
    const [contador, fnCambiadora] = React.useState(0);
    const incrementar = () => {
        fnCambiadora(contador + 1);

        }
        const decrementar = () => {
            fnCambiadora(contador - 1);
            }
            return(
                <>
                <span>Contador:{contador}</span>
                <button onClick={decrementar}>Decrementar</button>
                <button onClick={incrementar}>Incrementar</button>
                </>
                )
} */
export default App