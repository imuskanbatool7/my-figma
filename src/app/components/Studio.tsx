import React from 'react'
import Image from 'next/image'
const Studio = () => {
  return (
    <div className='px-4 py-8 '>
      <section className='justify-between bg-white  hover:border-2 hover:border-purple-600  p-6 sm:p-10 md:p-11 lg:p-12  w-full ml-3 mr-3 ' >
      <div className='p-3 hover:border-4 pb-2 hover:border-purple-600  w-[571px] h-auto '>
        <div className='text-[19px] pb-2 px-6 py-4 text-[#2A254B]  hover:border-purple-600 hover:underline decoration-purple-400 font-Clash Display'>
        From a studio in London to a global brand with
        over 400 outlets
        
        
        <p className=' pt-6 text-sm  text-gray-400 font-Clash Display  hover:underline decoration-purple-400' >When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community. <br />
        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </p>
        <div className='mt-auto p-10'>
        <button className=' absolute left-20 m-2 hover:border-2 hover:border-purple-600 w-[86px] h-[24px] text-[16px] bg-slate-100 mt-auto '>Get in touch</button>
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
