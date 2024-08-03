import React from 'react'
import Settings1 from '../assets/Setting (1).png'
import User from '../assets/user (5).png'

const Navbar = () => {
  return (
    <div className='fixed ml-[20.1vw] w-[80vw] h-[82px] bg-white pr-10 pt-6'>
      <div className='flex items-center gap-4 float-right'>
        <img className='size-[20px] cursor-pointer' src={Settings1} alt="Settings-image" />
        <img className='size-[30px] cursor-pointer' src={User} alt="Profile-image" />
      </div>
    </div>
  )
}

export default Navbar