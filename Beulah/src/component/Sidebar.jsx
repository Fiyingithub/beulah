import React from 'react'
import Navbar from './Navbar'
import Logo from '../assets/Beual-logo.png'
import home from '../assets/home.png'
import folder from '../assets/folder.png'
import users from '../assets/users.png'
import Admin from '../assets/setting (3).png'
import dropDown from '../assets/down-chevron.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'






const sidebar = () => {
  const [openBar, setOpenBar] = useState('hidden');

  const handleClick =()=>{
    if (openBar =='hidden') {
        setOpenBar('block'); 
    } else {
        setOpenBar('hidden');
    }
    
}


  return (
    <div className='flex gap-[2px]'>
      <div className='w-[20vw] h-[100vh] bg-white pl-8 pt-6 rounded-[1px]'>
        <div className='flex gap-2 items-center'>
          <img className='w-[39.86px] h-[39px]' src={Logo} alt="logo" />
          <h1 className='text-[#06476D] text-[20px] font-[800] font-[Avenir] '>Beaulah Destiny Club</h1>
        </div><br /><br />

        <div className='text-[gray]'>
          <Link to='/'  className='flex text-black items-center gap-4 font-[700] w-[90%] h-[40px] pl-4 bg-[#EBEBEB]'>
            <img src={home} alt="home-image" />
            <p className='text-[Avenir]'>Home</p>
          </Link><br />

          <div onClick={handleClick}  className='flex cursor-pointer items-center pl-4 gap-4 font-[700] '>
            <img src={folder} alt="home-image" />
            <p className='text-[Avenir] pr-16'>Application</p>
            <img className='size-4' src={dropDown} alt="drop-down" />
          </div><br />

          <div className={`${openBar}`}>
            <Link to='/membership'  className='flex items-center pl-14 gap-4 font-[700] '>
              <p className='text-[Avenir]'>Membership</p>
            </Link><br />

            <Link to='/about'  className='flex items-center pl-14 gap-4 font-[700] '>
              <p className='text-[Avenir]'>Loan</p>
            </Link><br />

            <Link  className='flex items-center pl-14 gap-4 font-[700] '>
              <p className='text-[Avenir]'>Early Withdrawal</p>
            </Link><br />
          </div>

          <div>
            <div  className='flex items-center gap-4 font-[700] pl-2 '>
              <img className='size-8' src={users} alt="home-image" />
              <p className='text-[Avenir]'>Users</p>
            </div><br />

            <div  className='flex items-center gap-4 font-[700] pl-2 '>
              <img className='size-8' src={Admin} alt="home-image" />
              <p className='text-[Avenir]'>Admin</p>
            </div><br />
          </div>
        </div>



      </div>


      <Navbar/>
    </div>
  )
}

export default sidebar