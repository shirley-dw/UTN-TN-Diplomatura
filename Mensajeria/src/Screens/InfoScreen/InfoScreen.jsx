import React from 'react'
import './InfoScreen.css'
import  ContactScreen from '../ContactScreen/ContactScreen.jsx';

const InfoScreen = () =>{ /* Define componente InfoScreen que devuelve un elemento JSX*/
  return(
    <div className="info-screen">{/* Devuelve el elemento JSX que se renderiza en la pantalla */}
      <ContactScreen />{/* Instancia el componente ContactScreen */}
    </div>
  )
}

export default InfoScreen