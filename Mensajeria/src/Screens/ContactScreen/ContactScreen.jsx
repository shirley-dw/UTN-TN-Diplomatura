import React from 'react'
import './ContactScreen.css'
import {ContactoFooter} from '../ContactoFooter/ContactoFooter.jsx';
import {ContactoHeader} from '../ContactoHeader/ContactoHeader.jsx'
import {ListaContactos} from '../ListaContactos/ListaContactos.jsx'



function ContactScreen() {
    const [search, setSearch] = useState('');

    const handleSearchChange = (value) => {
      setSearch(value);
      return (
        <div className="contact-screens">
            <ContactoHeader search={search} onSearchChange={handleSearchChange} />
            <ListaContactos search={search} />
            <ContactoFooter />
      </div>
    );
    }
  
}

export default ContactScreen;