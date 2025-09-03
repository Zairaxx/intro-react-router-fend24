import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProfilePage from './pages/ProfilePage'

import { useEffect, useState } from 'react'

function App() {
  return (
    //HOC - Higher Order Component

    <Router>

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/profile/:id' element={<ProfilePage  />}/>
      </Routes>
      
    </Router>
  )
}

export default App
