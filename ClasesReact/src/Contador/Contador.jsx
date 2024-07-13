import React, { useState } from 'react';
import '../Contador/Contador.css'

const Contador = ({ limit }) => {
    const [contador, setContador] = useState(0);
    const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false)
    const handleIncrementar = () => {
        if (contador != limit) {
            setContador(contador + 1);
            setAgregadoAlCarrito(true)
        }
    };

    const handleDecrementar = () => {
        if (contador != 0) {
            setContador(contador - 1)
            setAgregadoAlCarrito(false)
        }
    };

    return (
        <div className='contador'>
            {contador === 0 ? (
                (<button onClick={handleIncrementar} className='btn-comprar'>Comprar</button>)
            ) : (
                <>
                    <button onClick={handleDecrementar} className='btn'>-</button>
                    <span className='num'>{contador}</span>
                    <button onClick={handleIncrementar} className='btn'>+</button>
                </>
            )
            }
             {agregadoAlCarrito && <h2 className='title'> Agregado al carrito</h2>}
        </div>

    )
};

export default Contador;
