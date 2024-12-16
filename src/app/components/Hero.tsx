
import React from 'react'

import Image from 'next/image';



const Hero = () => {
  return (
    <div className='px-4 py-8' >
    <section className='grid grid-cols-1 md:grid-cols-2 border-4 hover:border-purple-600  bg-white justify-between items-center  p-6 sm:p-10 md:p-11 lg:p-12 w-full min-h-[355px] ml-3 mr-3  '>
      <div className=' bg-[#2A254B] hover:border-7 hover:border-purple-600 p-8 gap-41 w-[1080px] h-[460px] justify-between'>
        <div className='flex '>
        <div className='relative hover:border-2  items-center mr-3 ml-3 w-[517px] h-[187px] hover:border-purple-600 font-Clash Display'>
        <h1 className='text-white text-[35px] border-b-2 hover:border-purple-600 w-full  hover:underline decoration-purple-500'>The furniture brand for the future, with timeless designs</h1>
          <button className='absolute pl-4 pb-2 ml-0  bottom-2 left-2 px-4 py-2 rounded hover:bg-slate-300 bg-slate-500 text-white'>View collection</button>
        </div>
          {/* Right sec img  */}
       <div className=' flex-1 flex justify-end mx-auto w-[300px] h-180px'>
        <Image className='relative top-1/2 transform -translate-y-1/2 border-2 hover:border-purple-600 '
        src="/hero.png"
        alt="chair"
        width={300}
        height={300}/>
      </div>
      
        </div>
        <div className='relative hover:border-2  hover:border-purple-600 bottom-8 ml-6 mr-6 w-[517px] h-auto border-purple-600 font-Clash Display'>
          <p className=' text-white px-4' style={{ textAlign: 'justify' }} >A new era in eco friendly furniture with Avelon&ap0s;the French luxury retail brand
          with nice fonts&apos; tasteful colors and a beautiful way to display things digitally 
           using modern web technologies.</p> 
           </div>
      
        </div>

 
    </section>
    </div>

  )
}

export default Hero
