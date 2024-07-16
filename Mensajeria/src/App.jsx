import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChatScreen  from './Screens/ChatScreen/ChatScreen.jsx'


function App() {

    return (
        <Routes>
            <Route path="/" element={<ChatScreen />} />
            <Route path='chat/:id' element={<ChatScreen />} />
        </Routes>
    )
}

export default App



/* import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  ContactScreen  from './Screens/ContactScreen/ContactScreen.jsx'
import ChatScreen  from './Screens/ChatScreen/ChatScreen.jsx'
import InfoScreen from './Screens/InfoScreen/InfoScreen.jsx'

function App() {
  return (
 
      <Routes>
        <Route path="/" element={<ContactScreen />} />
        <Route path="/chat/:mensajesID" element={<ChatScreen />} />
        <Route path="/contactos" element={<ContactScreen />} />
        <Route path="/mensajes/:mensajesID" element={<ChatScreen />} />
        <Route path="/contactoInfo/:mensajesID" element={<InfoScreen />} />
      </Routes>
 
  )
}


export default App */
