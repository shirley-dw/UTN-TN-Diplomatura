/* Realizar una funcion que nos permita realizar las 4 operaciones aritmeticas,
 es decir nos permita sumar, restar, dividir y multiplicar en un alert donde solicite la operacion
 , numero1 y numero2. La funcion debe recibir tres parametros,
 dos de ellos deben ser los valores (a, b) y uno la operacion
 Si el parametro de la operacion no es valido debe mandar un pop up que mande un error personalizado  */

 const OPERACIONES = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
      if (b === 0) {
        alert('Error: No se puede dividir entre cero');
        return;
      }
      return a / b;
    }
  };
  
  function operacionAritmetica(operacion, a, b) {
    if (typeof a!== 'number' || typeof b!== 'number') {
      alert('Error: Los valores deben ser números');
      return;
    }
  
    if (OPERACIONES[operacion]) {
      return OPERACIONES[operacion](a, b);
    } else {
      alert('Error: Operación no válida');
      return;
    }
  }
  
  // Ejemplo de uso
  const operacion = prompt('Ingrese la operación (sumar, restar, multiplicar, dividir)');
  const a = parseFloat(prompt('Ingrese el primer número'));
  const b = parseFloat(prompt('Ingrese el segundo número'));
  
  const resultado = operacionAritmetica(operacion, a, b);
  if (resultado!== undefined) {
    alert(`El resultado de la operación es: ${resultado}`);
  }


//EJECUCION DE FUNCIONES


/* Realizar una funcion que almacene en un arreglo todos los numeros pares desde a hasta b */
function ejercicioDos(a, b) {
    let pares = []
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            pares.push(i)
            }
            }
            return pares
            }