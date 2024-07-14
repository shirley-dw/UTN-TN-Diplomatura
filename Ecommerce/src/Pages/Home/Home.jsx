import React from 'react'
import { Navbar } from '../../Components/Navbar'
import { Link } from 'react-router-dom'; /* Importante importar el LINK */



const Home = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <h1>Lista productos</h1>
            {lista_de_productos.map(product =>
                <div key={product.id}>
                    <h2>{product.titulo}</h2>
                    <span>{product.precio}</span>
                    <hr />
                    <span>{product.categoria}</span>
                    <Link to={'details/' + product.id }>Ver detalle</Link>{/* Contacteno con {} para que me llame el link del app */}
                    <hr/>
                    </div>
            )}
        </div>
        </div>
  )
}

export default Home