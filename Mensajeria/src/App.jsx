/* import React from 'react'
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

export default App */



import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactScreen from './Screens/ContactScreen/ContactScreen.jsx'
import ChatScreen from './Screens/ChatScreen/ChatScreen.jsx'


function App() {
  return (
 
      <Routes>
        <Route path="/" element={<ContactScreen />} />
        <Route path='mensaje/:id' element={<ChatScreen />} />
        <Route path="/contactos" element={<ContactScreen />} />
        <Route path="/mensaje/:id" element={<ChatScreen />} />
        
      </Routes>
 
  )
}


export default App