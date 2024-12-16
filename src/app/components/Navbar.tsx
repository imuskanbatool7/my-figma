import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='px-2 py-2 ml-auto mr-10 justify-between flex-col hidden md:flex '>
        
     <div className=' border-b-2 border-[#60606058] border-x-0 mr-9 ml-9 px-2 py-2'>
     <div className='absolute  left-2 pr-0 px-28 py-26 top-1/2-translate-x-1/2 pt-5'>
    <button className='bg-slate-400'>
    <IoSearchOutline />
    </button>
    </div>
        <h1 className="flex justify-center py-4">Avion</h1>
    <div className='relative'>
        <button className='absolute right-10 px-1367 py-26 top-1/2 transform -translate-y-1/2 pb-20 pt-5 '>
        <IoCartOutline />
        </button>
        <button className='absolute right-2 px-1396 py-26 top-1/2 transform -translate-y-1/2 pb-20 pt-5'> 
        <CgProfile />
        </button>
    </div>
    </div>
    <nav className=''>
     <ul className='flex justify-center gap-8 relative px-[30px] py-[20px]'>
          <Link href="/">Plant pots</Link>
           
           <Link href="/">Ceramics</Link>
          
           <Link href="/">Tables</Link>
           
           <Link href="/">Chairs</Link>

           <Link href="/">Crockery</Link>
           
           <Link href="/">Tableware</Link>
          
           <Link href="/">Cutlery</Link>  
     </ul>
      </nav>
    </div>
  )
}

export default Navbar
