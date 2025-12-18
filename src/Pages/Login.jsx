import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login')

  const navigate=useNavigate()

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    console.log("Form Submitted")
    navigate("/")
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className=' text-2xl sm:text-4xl font-medium mb-2 text-center'>{currentState}</p>
        <hr className=' border-none h-[1.5px] w-8 bg-gray-800 '/>
      </div>
      {currentState==='Login'? '' : <input className=' w-full px-3 py-2 border border-black ' type="text" placeholder='Name' required  />}
      <input className=' w-full px-3 py-2 border border-black ' type="email" placeholder='Email'  required />
      <input className=' w-full px-3 py-2 border border-black ' type="password" placeholder='Password'  required />
      <div className='w-full flex justify-between text-sm mt-[-8px] '>
        <p className='cursor-pointer'>Forgot Password ?</p>
        {
          currentState==='Login'
          ?<p onClick={()=>setCurrentState('Sing Up')} className='cursor-pointer'>Create Account</p>
          :<p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button type='submit' className='bg-black text-white rounded text-sm font-light mt-4 px-8 py-3 hover:bg-[#242424] cursor-pointer  '>{currentState==='Login'?'Sing In ':'Sing Up'}</button>
    </form>
  )
}

export default Login