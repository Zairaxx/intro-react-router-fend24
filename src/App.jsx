import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import Homepage from './pages/Homepage'
import ProfilePage from './pages/ProfilePage'

import { useState } from 'react'

function App() {

  const [students, setStudents] = useState([
    {
      name:"Batman",
      age:44,
      id:1
    },
    {
      name:"Superman",
      age:55,
      id:2
    },
    {
      name:"Wonderwoman",
      age:44,
      id:3
    }
  ]);

  return (
    //HOC - Higher Order Component

    <Router>

      <Routes>
        <Route path='/' element={<Homepage students={students}/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/profile/:id' element={<ProfilePage students={students}/>}/>
      </Routes>
      
    </Router>
  )
}

export default App
