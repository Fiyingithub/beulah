import Arrow from '../../assets/less-than-symbol.png'
import { Link } from 'react-router-dom'
import Image from '../../../public/image.svg'
import React from 'react'
import calendar from '../../assets/calendar.png'
import deletes from '../../assets/bin.png'
import cancel from '../../assets/cancel (2).png'
import { useState } from 'react'





const Userpage = () => {
  const [imageCancel,setImageCancel] = useState(true);
  const cancleClick = () => {
    setImageCancel(!imageCancel);
  };






  return (
    <div className="w-[78vw] ml-[20.1vw] h-[89vh] pt-20">

      <div className=" flex justify-between items-center mt-4 px-10 font-[Avenir]">

        <h1 className="font-[800] text-[48px] text-black">Usher Raymond</h1>

        <div className="flex items-center">

          <div className="bg-gray-300 rounded-[360px] px-1 py-1 mt-3 mr-2 w-[25px] h-[25px]" >
            <img src={Arrow} className="w-6 h-4 text-black" />
          </div>
          <Link to='/membership' className="underline mt-3 ">Back to Membership Applications </Link>
        </div>
      </div>

      <div className='flex gap-4 pl-10  mt-4'>
        <div className='w-[54vw] h-[100%] pb-20 bg-white rounded-[5px] px-10'>
          {/* Profile */}

          <div className="flex items-center mt-6 ">
            <img src={Image} className="w-[49px] h-[49px] rounded-[560px] mt-1 "/>
            <div className="w-[4px] h-[18px] bg-black ml-4 mt-5"></div>
            <Link className="mt-4 text-[15px] font-[500] underline ml-2">
              View Picture
            </Link>
          </div><br />
          <div className='flex justify-center gap-8'>
            <div className="  ">
              <p className="text-[16px]">Personal Details</p>
              <hr className="w-[13vw] font-[500] h-[2px]  mt-1" />
              <p className="text-[#AAAAAA] text-[12px] mt-3">Firstname</p>
              <p className="text-[14px]  mt-1">Usher</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Surname</p>
              <p className="text-[14px]  mt-1">Raymond</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Other Name</p>
              <p className="text-[14px]  mt-1">Singer</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Email Address</p>
              <p className="text-[14px]  mt-1">UsherRaymond@mail.com</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Gender</p>
              <p className="text-[14px]  mt-1">Male</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Date of Birth</p>
              <p className="text-[14px]  mt-1">19-02-1998</p>

              {/* Health Details */}
              <div className="pt-[180px]">
                <p className="text-[16px] ">Health Details</p>
                <hr className="w-[15vw] font-[500] h-[2px]  mt-1" />
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Body Max Index (BMI)
                </p>
                <p className="text-[14px]  mt-1">39.5</p>
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Average Daily Blood Pressure
                </p>
                <p className="text-[14px]  mt-1">111</p>
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Fasting Blood Sugar
                </p>
                <p className="text-[14px]  mt-1">398</p>
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  2HPP Blood Sugar
                </p>
                <p className="text-[14px]  mt-1">232</p>
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Health Issues, if any
                </p>
                <p className="text-[14px]  mt-1">Diebetes</p>
              </div>
            </div>
            {/* Contact Details */}
            <div className=" ">
              <p className="text-[16px]">Address and Contact Details</p>
              <hr className="w-[13vw] font-[500] h-[2px]  mt-1" />
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Residential Address
              </p>
              <p className="text-[14px]  mt-1">
                1, Abule Egba Street,
                <br />
                Egbeda, Lagos State
              </p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Ownership Of Residence
              </p>
              <p className="text-[14px]  mt-1">Tenant</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Postal Address</p>
              <p className="text-[14px]  mt-1">100292</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Telephone 1</p>
              <p className="text-[14px]  mt-1">2348172638267</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Gender</p>
              <p className="text-[14px]  mt-1">Male</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Telephone 2</p>
              <p className="text-[14px]  mt-1">2348172638267</p>
              <br />
              {/* Business Detail */}
              <div className="pt-[135px]">
                <p className="text-[16px] ">Business Details</p>
                <hr className="w-[15vw] font-[500] h-[2px]  mt-1" />
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Address of Place of Business
                </p>
                <p className="text-[14px]  mt-1">
                  1, Abule Egba Street,
                  <br />
                  Egbeda, Lagos State
                </p>
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Type of Business
                </p>
                <p className="text-[14px]  mt-1">Sole Proprietor</p>
              </div>
            </div>

            {/* Education And Family Details */}
            <div className="  ">
              <p className="text-[16px]">Education and Family Details</p>
              <hr className="w-[13vw] font-[500] h-[2px]  mt-1" />
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Highest Education
              </p>
              <p className="text-[14px]  mt-1">University Degree</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Next of Kin</p>
              <p className="text-[14px]  mt-1">Raymond Kim</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Number of Children
              </p>
              <p className="text-[14px]  mt-1">3</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Number of Male Children
              </p>
              <p className="text-[14px]  mt-1">1</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Number of Female Children
              </p>
              <p className="text-[14px]  mt-1">2</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Age of Youngest</p>
              <p className="text-[14px]  mt-1">10</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Age of oldest</p>
              <p className="text-[14px]  mt-1">20</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Number of other Dependant
              </p>
              <p className="text-[14px]  mt-1">None</p>
            </div>
          </div>
        </div>


        <div>
         {/* Form Details 1*/}
          <div className='w-[21vw] h-[400px] bg-white rounded-[5px] px-6'>
          <form action="">
            <p className="text-[#AAAAAA] text-[12px] font-[600] pl-1 pt-6">
              Penalty In Naira
            </p>
            <div className="border border-[#AAAAAA] bg-[#EBEBEB] flex  focus:outline-none pl-[16px] mt-2 w-[100%] h-[45px] rounded-[5px]">
              <img src="./image/nigeria-naira-currency-symbol.png" className="w-[10px] h-[30px] pt-4 "/>
              <input type="text" className="focus:outline-none  w-[100%] h-[50px] ml-2  bg-transparent text-[20px]"/>
            </div>

            <p className="text-[#AAAAAA] text-[12px] font-[600] pl-1 pt-6">
              Credit Score
            </p>
            <div className="border border-[#AAAAAA] bg-[#EBEBEB]   focus:outline-none pl-[16px] mt-2 w-[100%] h-[45px] rounded-[5px]">
              <input type="text" className="focus:outline-none  w-[100%] h-[50px] ml-2  bg-transparent text-[20px]"/>
            </div>

            <p className="text-[#AAAAAA] text-[12px] font-[600] pl-1 pt-4">
              Minimum Monthly Deposit
            </p>
            <div className="border border-[#AAAAAA] bg-[#EBEBEB] flex  focus:outline-none pl-[16px] mt-2 w-[100%] h-[45px] rounded-[5px]">
              <img src="./image/nigeria-naira-currency-symbol.png" className="w-[10px] h-[30px] pt-4 "/>
              <input type="text" className="focus:outline-none  w-[100%] h-[50px] ml-2  bg-transparent text-[20px]"/>
            </div>

            {/* button */}
            <div className="flex items-center gap-6 text-[14px] font-[500] font-[Avenir] mt-10 ">

              <button className="w-[50%] h-[45px] bg-white pt-1 pl-1 border-2 border-black  rounded-[5px] text-black">
                Decline Request
              </button>
              <button className="w-[50%] h-[45px] bg-[#06476D] pt-1 pl-1  rounded-[5px] text-white">
                Approve Request
              </button>
            </div>

          </form>
          </div><br />

          <div className='w-[21vw] h-[600px] py-6 bg-white rounded-[5px] px-6'>
            {/* Form Details 2 */}
            <div className="flex font-[500] font-[Avenir] text-[20px] ">
              <p>Note</p>
              <div className="rounded-[3px] bg-[#EBEBEB] w-[20px] ml-2 h-[10px]rounded-[4px] text-[16px] pl-1 pt-1  gap-2 ">
                2
              </div>
            </div>

            <form action="">
              <div className="mt-4 w-[100%] h-[160px] border-2 border-[#EBEBEB] rounded-[8px] ">
                <textarea cols="29" rows="4" className=" pl-[20px]  pt-2 focus:outline-none text-[gray]  border border-transparent ">
                  Type Your Note
                </textarea>
               
                <hr />
                <button className="w-[100px] h-[35px] float-right mr-2 bg-[#06476D] mt-1 rounded-[5px] text-white" >Add Note</button>
              </div>
            </form>

            <div className="w-[100%] h-[140px] border-2 border-[#EBEBEB] rounded-[8px] mt-8 text-[16px] font-[Avenir] ">
              <div className="flex items-center  h-[60px] pt-4 pl-4">
                <img src={calendar} className="w-[16px] h-[16px] mt-1  "  />
                <p className="ml-2" >Today, 10:00AM</p>
                <img src={deletes} className="w-[16px] h-[16px] mt-1 ml-[90px] " />
              </div><hr />
              <p className="text-[gray] text-[15px] font-[500] pl-4 pt-6 ">Applicant Address is not Verifiable and needs to be properly reviewed</p>
            </div>

            <div className="w-[100%] h-[140px] border-2 border-[#EBEBEB] rounded-[8px] mt-8 text-[16px] font-[Avenir] ">
              <div className="flex items-center  h-[60px] pt-4 pl-4">
                <img src={calendar} className="w-[16px] h-[16px] mt-1  "  />
                <p className="ml-2" >Today, 10:00AM</p>
                <img src={deletes} className="w-[16px] h-[16px] mt-1 ml-[90px] " />
              </div><hr />
              <p className="text-[gray] text-[15px] font-[500] pl-4 pt-6 ">Applicant Number is not Verifiable and needs to be properly reviewed</p>
            </div><br /><br /><br /><br />
          </div>
        </div>
      </div>

      <div className= {`${imageCancel ? 'block' : 'hidden'} flex items-center mx-[15%] -mt-[1050px]`}>
        <img className='' src={Image} alt="" />
        <img onClick={cancleClick} className='-mt-[511px] -ml-[87.6px] cursor-pointer' src={cancel} alt="" />
      </div>
    
    </div>
  )
}

export default Userpage