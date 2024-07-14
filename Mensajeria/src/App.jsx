import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ContactScreen } from '../src/Screens/ContactScreen/ContactScreen.jsx'
import { ChatScreen } from '../src/Screens/ChatScreen/ChatScreen.jsx'
import { InfoScreen } from '../src/Screens/InfoScreen/InfoScreen.jsx'




function App() {
  return (
 
      <Routes>
        <Route path="/" element={<ContactScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/contactos" element={<ContactScreen />} />
        <Route path="/mensajes/:contactoID" element={<ChatScreen />} />
        <Route path="/contactoInfo/:contactoID" element={<InfoScreen />} />
      </Routes>
 
  )
}


export default App