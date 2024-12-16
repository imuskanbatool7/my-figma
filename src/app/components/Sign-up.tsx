import React from 'react'

const Signup = () => {
  return (
    <div className='px-4 py-8' >
    <section  className='bg-white   hover:border-2 hover:border-purple-600 p-6 sm:p-10 md:p-11 lg:p-12  w-full min-h-[355px] ml-3 mr-3  flex justify-between items-center'>
  <div className='w-[1273px] h-[364px]  border-purple-600 hover:border-2 hover:border-purple-400 border-2 flex flex-col justify-center items-center p-10 pt-3 mx-10' >
    
    <div className='text-center p-3 hover:border-4 pb-2 hover:border-purple-600  w-[571px] h-auto '>
        <div className='text-[36px] pb-2 px-6 py-4 text-[#2A254B] hover:border-2 border-purple-600 hover:underline decoration-purple-400 font-Clash Display'>
        Join the club and get the benefits
        </div>
        <p className='text-center pt-6 text-sm  text-gray-400 font-Clash Display hover:border hover:border-purple-700 hover:underline decoration-purple-400' >
        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
        </p>
    </div>
    
    <div className='text-center mt-auto  '>
        <input className='p-3 hover:border-2 hover:border-purple-600 w-[354px] mb-4 '
        placeholder='your@email.com'
      />
     <button className='bg-[#2A254B] hover:border-2 hover:border-purple-500 text-white text-[11px] p-4 w-[118px] h-auto '>Sign Up</button>
    </div>
    
        
  </div>
  
    </section>
    </div>
  )
}

export default Signup
