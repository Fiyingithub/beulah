import React from 'react'
import fileFolder from '../../assets/files-and-folders.png'
import increase from '../../assets/increase.png'
import users from '../../assets/users.png'
import arrow from '../../assets/arrow (4).png'

const Home = () => {
  return (
    <div className='w-[80vw] h-[89vh] ml-[20vw] pt-[70px] px-10'>
      <h1  className='py-4 leading-[65.57px]  text-[48px] font-[800] font-[Avenir]'>Dashboard</h1>

      <div className='flex gap-[36px]'>
        <div className='w-[835px] h-[466px] rounded-[16px] p-[32px] bg-white'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
              <div className='w-4 h-10 bg-[#06476D]'></div>
              <b>Total Users</b>
            </div>
            
            <div>
              <select className='w-[120px] px-2 h-[30px] border-2'>
                <option>Last week</option>
              </select>
            </div>
          </div><br />

          <div>
            <b className='text-2xl text-[Avenir]'>1,263 users</b>
            <div className='flex items-center gap-2'>
              <div className='flex gap-1 mt-1 w-20 h-6 bg-[#ccf4d6]'>
                <img className='h-6' src={arrow} alt="" />
                <p className='text-[#54ce70] font-[600]'>13.5%</p>
              </div>
              <b className='text-sm'>vs,Aug 2024</b>
            </div>
          </div><br />

          <div className='mt-2'>
            <div className='flex items-center gap-1'>
              <p className=''>1300</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
            <div className='flex mt-4 items-center gap-1'>
              <p className=''>1200</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
            <div className='flex mt-4 ml-2 items-center gap-1'>
              <p className=''>900</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
            <div className='flex mt-4 ml-2 items-center gap-1'>
              <p className=''>600</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
            <div className='flex mt-4 ml-2 items-center gap-1'>
              <p className=''>300</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
            <div className='flex mt-4 ml-2 items-center gap-1'>
              <p className=''>100</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
          </div>

          <div className='flex items-center ml-12 gap-24'>
            <p>Aug</p>
            <p>Sep</p>
            <p>Oct</p>
            <p>Nov</p>
            <p>Dec</p>
            <p>Jan</p>
          </div>

        </div>




        <div className=''>
          <div className='flex gap-10 items-center w-[338px] h-[161px] rounded-[16px] p-[32px] bg-white'>
           <div className='size-16 rounded-[360px] py-4 px-4 bg-[#EBEBEB]'>
             <img className='size-8' src={users} alt="user-profile" />
           </div>
            <div className=''>
              <p className='text-lg text-[gray]'>Membership Forms</p>
              <b className='text-5xl text-[#06476D]'>19</b>
            </div>
            
          </div>
          <div className='flex gap-10 mt-[36px] items-center w-[338px] h-[161px] rounded-[16px] p-[32px] bg-white'>
           <div className='size-16 rounded-[360px] py-4 px-4 bg-[#EBEBEB]'>
             <img className='size-8' src={increase} alt="user-profile" />
           </div>
            <div className=''>
              <p className='text-lg text-[gray]'>Loan Application</p>
              <b className='text-5xl text-[#06476D]'>2</b>
            </div>
            
          </div>
          <div className='flex gap-10 mt-[36px] items-center w-[338px] h-[161px] rounded-[16px] p-[32px] bg-white'>
           <div className='size-16 rounded-[360px] py-4 px-4 bg-[#EBEBEB]'>
             <img className='size-8' src={fileFolder} alt="user-profile" />
           </div>
            <div className=''>
              <p className='text-lg text-[gray]'>Early Withdrawal</p>
              <b className='text-5xl text-[#06476D]'>23</b>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home