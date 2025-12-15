import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='conatiner mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent '>
            {/* <Link to='/'><img src={assets.logo} alt="" /></Link> */}
            <img className='cursor-pointer' src={assets.logo} alt="" />
            <ul className=' hidden md: '>
                <a href='#header ' className=' cursor-pointer hover:text-gray-400 px-5 gap-[1.75rem] '>Home</a>
                <a href='#header ' className=' cursor-pointer hover:text-gray-400 px-5 gap-[1.75rem] '>About</a>
                <a href='#header ' className=' cursor-pointer hover:text-gray-400 px-5 gap-[1.75rem] '>Projects</a>
                <a href='#header ' className=' cursor-pointer hover:text-gray-400 px-5 gap-[1.75rem] '>Testimonials</a>
            </ul>
            <button className=' hidden md:block bg-blue-400 cursor-pointer hover:bg-gray-600 px-8 py-2 rounded-full  '>Sing Up</button>
        </div>
    </div>
  )
}

export default NavBar