import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex justify-between items-center p-2 px-[4%]'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="logo" />
        <button onClick={() => setToken('')} className='bg-rose-400 text-white px-5 py-2 sm:px-7 sm;py-2 rounded-full text-xs sm:text-sm'>Logout</button>
        
    </div>
  )
}

export default Navbar