import React from 'react';
import './InfoScreen.css';
import ContactScreen from '../ContactScreen/ContactScreen.jsx';

const InfoScreen = ({ contactoid }) => {
  return (
    <div className="info-screen">
      <ContactScreen contactoid={contactoid} />
    </div>
  );
};

export default InfoScreen;