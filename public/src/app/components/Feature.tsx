

import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { PiCheckCircleThin } from "react-icons/pi";
import { CgBox } from "react-icons/cg";
import { LuSprout } from "react-icons/lu";


const Feature = () => {
  return (
    <div className='justify-between ml-10 mr-10 px-2 py-2' >
    <section className=' flex flex-col sm:flex md:flex lg:flexbg-white  hover:border-2 hover:border-purple-600 p-10 w-[1440px] h-[355px] ml-3 mr-3 '>
      {/* subtittle */}
     <h2 className=' border relative items-center border-x-0  hover:border-2 hover:border-purple-600  text-3xl flex justify-center font-Clash Display text-gray-400 text-[24px] '>Next day as standard</h2>
     <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
      {/* bar1 */}
      
      
      <div className='relative flex flex-row gap-20 w-[1500px] h-[160px] pt-10 ml-7 mr-7 '>
        <div className='relative hover:border-2 hover:border-fuchsia-600'>
     <CiDeliveryTruck  />
      <div className='hover:border-2 border-purple-600 hover:underline decoration-purple-500  text-[20px] pb-4  text-gray-500 font-Clash Display'>Next day as standard <div>
        <p className='text-gray-400 text-[15px] font-Clash Display pt-5 pb-0 hover:border-2 hover:border-fuchsia-500 hover:underline decoration-fuchsia-600'>Order before 3pm and get your order <br/>
        the next day as standard</p>
        </div>
        </div>
        </div>
        {/* bar2 */}
        <div className='relative hover:border-2 hover:border-purple-600 '>
        <PiCheckCircleThin />
          <div className='hover:border-2 border-purple-600 hover:underline decoration-purple-500  text-[20px] pb-2 text-gray-500 font-Clash Display h-[24px]' >Made by true artisans</div>
          <p className='text-gray-400 text-[15px] font-Clash Display pt-5 pb-0 hover:border-2 hover:border-fuchsia-500 hover:underline decoration-fuchsia-600'>Handmade crafted goods <br/> made with
          real passion and craftmanship</p>
        </div>
        {/* bar3 */}
        <div  className='relative hover:border-2 hover:border-purple-600 '>
        <CgBox />
          <div className='hover:border-2 border-purple-600 hover:underline decoration-purple-500  text-[20px] pb-2 text-gray-500 font-Clash Display h-[24px]'>Unbeatable prices</div>
          <p className='text-gray-400 text-[15px] font-Clash Display pt-5 pb-0 hover:border-2 hover:border-fuchsia-500 hover:underline decoration-fuchsia-600 '>For our materials and quality <br/> you won&apos;t find better prices anywhere</p>
        </div>
        {/* bar4 */}
        <div className='relative hover:border-2 hover:border-purple-600 '>
        <LuSprout />
          <div className='hover:border-2 border-purple-600 hover:underline decoration-purple-500  text-[20px] pb-2 text-gray-500 font-Clash Display h-[24px]'>Recycled packaging</div>
          <p className='text-gray-400 text-[15px] font-Clash Display pt-5 pb-0 hover:border-2 hover:border-fuchsia-500 hover:underline decoration-fuchsia-600 ' >We use 100% recycled packaging  <br/> to ensure our footprint is manageable</p>
        </div>
       </div>
      </div>
    
    </section>
    </div>
  )
}

export default Feature