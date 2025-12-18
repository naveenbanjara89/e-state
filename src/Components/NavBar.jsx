import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    if(showMobileMenu){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }
    return ()=>{
      document.body.style.overflow='auto'
    }
  }, [showMobileMenu])
  

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='conatiner mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent '>
            <a href='/'><img className='cursor-pointer px-9' src={assets.logo} alt="" /></a>
            <ul className=' hidden md:flex gap-7 px-3  text-white mr-22 '>
                <a href='#Header' className='cursor-pointer hover:text-gray-400  '>Home</a>
                <a href='#About' className='cursor-pointer hover:text-gray-400  '>About</a>
                <a href='#Projects' className='cursor-pointer hover:text-gray-400  '>Projects</a>
                <a href='#Testimonials' className='cursor-pointer hover:text-gray-400  '>Testimonials</a>
            </ul>
            {/* <button className=' hidden md:block bg-white cursor-pointer  px-8 py-2 rounded-full  '>Sing Up</button> */}
            <Link to={'/login'} ><img className='w-5 md:block invert mr-20  cursor-pointer hover:invert brightness-0 hover:scale-110 hover:opacity-80 transition duration-200 ' src={assets.profile_icon} alt=''/></Link>
            <img onClick={()=>setShowMobileMenu(true)}  src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/*  -----------------------------mobile menu----------------------------------------------- */}
        <div className={` md:hidden ${showMobileMenu ? 'fixed w-full':'h-0 w-0' }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all `}>
          <div className='flex justify-end p-6 cursor-pointer '>
            <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} className='w-6 ' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-2 px-5 text-lg font-medium  '>
            <a onClick={()=>setShowMobileMenu(false)} href='#Header' className='  py-2 px-4 rounded-full inline-block  '>Home</a>
            <a onClick={()=>setShowMobileMenu(false)} href='#About' className='  py-2 px-4 rounded-full inline-block  '>About</a>
            <a onClick={()=>setShowMobileMenu(false)} href='#Projects' className='  py-2 px-4 rounded-full inline-block  '>Projects</a>
            <a onClick={()=>setShowMobileMenu(false)} href='#Testimonials' className='  py-2 px-4 rounded-full inline-block  '>Testimonials</a>
          </ul>
        </div>

    </div>
  )
}

export default NavBar