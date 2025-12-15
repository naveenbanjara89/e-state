import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='conatiner mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent '>
            {/* <Link to='/'><img src={assets.logo} alt="" /></Link> */}
            <img className='cursor-pointer px-9' src={assets.logo} alt="" />
            <ul className=' hidden md:flex gap-7 px-3  text-white '>
                <a href='#header' className='cursor-pointer hover:text-gray-400  '>Home</a>
                <a href='#header' className='cursor-pointer hover:text-gray-400  '>About</a>
                <a href='#header' className='cursor-pointer hover:text-gray-400  '>Projects</a>
                <a href='#header' className='cursor-pointer hover:text-gray-400  '>Testimonials</a>
            </ul>
            <button className=' hidden md:block bg-white cursor-pointer hover:bg-gray-600 px-8 py-2 rounded-full  '>Sing Up</button>
            <img src={assets.menu_icon} className='md:hidden w-7' alt="" />
        </div>
    </div>
  )
}

export default NavBar