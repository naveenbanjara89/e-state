import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Testimonials from './Pages/Testimonials'
import Contact from './Pages/Contact'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='w-[100%] overflow-hidden '>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App