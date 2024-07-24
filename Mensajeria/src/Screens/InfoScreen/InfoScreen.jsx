import React from 'react';
import './InfoScreen.css';
import{ ContactInfo} from '../../Components/Contactos/ContactoInfo/ContactInfo.jsx';

const InfoScreen = ({ contactoid }) => {
  return (
    <div className="info-screen">
      <ContactInfo contacto={contactoid} />
    </div>
  );
};

export default InfoScreen;