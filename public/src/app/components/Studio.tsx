import React from 'react'
import Image from 'next/image'
const Studio = () => {
  return (
    <div className='max-w  justify-between  mr-10 px-10 py-2 '>
      <section className='flex  sm:flex md:flex lg:flex justify-between bg-white  hover:border-2 hover:border-purple-600 p-10 w-[1440px] h-[355px] mx-3 ml-3' >
      <div className='p-3 hover:border-4 pb-2 hover:border-purple-600  w-[571px] h-auto '>
        <div className='text-[19px] pb-2 px-6 py-4 text-[#2A254B]  hover:border-purple-600 hover:underline decoration-purple-400 font-Clash Display'>
        From a studio in London to a global brand with
        over 400 outlets
        
        
        <p className=' pt-6 text-sm  text-gray-400 font-Clash Display  hover:underline decoration-purple-400' >When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community. <br />
        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </p>
        <div className='mt-auto p-10'>
        <button className=' absolute left-12 m-2 hover:border-2 hover:border-purple-600 w-[86px] h-[24px] text-[16px] bg-slate-100 mt-auto '>Get in touch</button>
        </div>
        </div>
       
    </div>
     {/* right side */}
     <div className='flex justify-end'> 
        <Image className='flex justify-end w-[500px] h-[300px] hover:border-2 hover:border-purple-600'
        src="/studio.png"
        alt="img"
        width={300}
        height={300}
        /> 
        </div>
      </section>
    </div>
  )
}

export default Studio
