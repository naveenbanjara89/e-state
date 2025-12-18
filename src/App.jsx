import React from 'react'
import Login from './Pages/Login'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <div className='w-[100%] overflow-hidden '>
      
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App