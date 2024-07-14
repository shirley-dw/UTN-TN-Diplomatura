/* Aca configuro mi app para que tenga el enrutador */
import React from 'react'
/* Importo React router DOM */
import { Route, Routes } from 'react-router-dom'
import { Details, Home, Contact, Cart} from './Pages'

function App() {

  return (

    <Routes> {/* Componente que viene directamente de la libreria de routes(Se auto importa) */}
      <Route path='/' element={<Home />} />{/* Configuro la ruta puntual */}
      <Route path='/Details/:productId' element={<Details />} />{/* /:productId me lleva a la ruta donde quiero establecer el ID  */}
      <Route path='/Contact' element ={<Contact />}/>{/* Creo otra route con el Path '/Detail' */}
      <Route path='/Cart' element={<Cart/>}/>{/* Voy llamado a mis rutas con Path */}
    </Routes>
  )
}

export default App
/*
1) LLamo al elemento Home y se renderiza como componente por mas que este dentro de llavez
2) Path es la es la direccion de la ruta que quiero configurar, determina donde o que ruta.
    Ejemplo: <Route path='/Details' element={<Detail/>}/>
    (Puedo acceder a otras rutas en el url cambiando el /Detail)
3) En el main agrego el componente <BrowserRouter><BrowserRouter/>
  */