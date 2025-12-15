import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center '>
        <h1 className='text-6xl font-bold flex justify-center font-[82px] text-white '>Explore homes <br/> that  fit your <br/> dreams</h1>
        <div className='flex justify-center gap-5'>
            <button className='bg-transparent border border-gray-400 rounded-xl '>Projects</button>
            <button className='bg-transparent border border-gray-400 rounded-xl '>Contact Us</button>
        </div>
    </div>
  )
}

export default Home