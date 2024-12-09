 
 import React from 'react'
 import { CiLinkedin } from "react-icons/ci";
 import { CiFacebook } from "react-icons/ci";
 import { FaInstagram } from "react-icons/fa";
 import { FaSkype } from "react-icons/fa6";
 import { FaTwitterSquare } from "react-icons/fa";
 import { FaPinterestSquare } from "react-icons/fa";
 
 const Footer = () => {
   return (
     <div className='justify-between ml-10 mr-10 px-2 py-2'>
       <section className=' flex-col sm:flex md:flex lg:flex bg-[#2A254B] flex justify-between hover:border-2 hover:border-purple-600 p-10 w-[1440px] h-[355px] mx-3 ml-3' >
        <div className='gap-40 items-center'>
        <div className='text-white hover:border-2 hover:border-purple-800 inline-block'>
            <p className='font-Clash Display text-[16px] p-2 font-bold'>Menu</p> 
            <div className='text-[14px] font-Satoshi p-2 py-2'>
           <p>New arrivals</p> <br />
           <p> Best sellers </p> <br />
           <p> Recently viewed </p> <br /> 
           <p> Popular this week</p> <br />
           <p> All productsp</p>
           </div>
        </div>
        <div className=' text-white hover:border-2 hover:border-purple-800 inline-block '>
            <p className='font-Clash Display text-[16px] p-2  font-bold'>Categories</p>
            <div className='text-[12px]  font-Satoshi p-4 py-0'>
            <p>Crockery</p> <br />
            <p>Furniture</p> <br />
            <p>Homeware</p> <br />
            <p>Plant pots</p> <br />
            <p>Chairs</p> <br />
            <p>Crockery</p> </div>
        </div>
        <div className='text-white hover:border-2 hover:border-purple-800 inline-block'>
    
            <p  className='font-Clash Display text-[16px] p-2 font-bold'>Our company</p>
            <div className='text-[14px] font-Satoshi p-3 py-2 '>
            <p>About us</p> <br />
            <p>Vacancies</p> <br />
            <p>Contact us</p> <br />
            <p>Privacy</p> <br />
            <p>Returns policy</p> </div>
        </div>

        <div className='border-b-2 border-purple-700 '></div>
        <p className='text-white hover:border-2 hover:border-purple-800 inline-block text-[11px]'>Copyright 2022 Avion LTD</p>
        <div className=''>
        <div className='flex justify-end gap-2 absolute right-10 px-20 py-0 mt-auto m-10 '>
        <CiLinkedin /> 
        <CiFacebook />
        <FaInstagram />
        <FaSkype />
        <FaTwitterSquare />
        <FaPinterestSquare />
        </div>
        </div>
        </div>
        
       </section>

     </div>
   )
 }
 
 export default Footer
 