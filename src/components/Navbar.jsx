import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-slate-950 text-white flex items-center justify-between py-5 px-8 font-medium'>
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center justify-center">
         <img src={assets.logo} className='w-16' alt='Logo'/>
            <p className='text-xs font-normal text-center'>
      THE CONCERNED <br /> CITIZENS OF YENDI
            </p>
        </div>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-3 text-sm text-white items-center">
  {/* Individual NavLink Items */}
  <NavLink to="/" className="flex flex-col items-center gap-1">
    <p>HOME</p>
    <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
  </NavLink>
  <div className="h-6 w-px bg-gray-300"></div> {/* Vertical Line */}

  <NavLink to="/about" className="flex flex-col items-center gap-1">
    <p>ABOUT US</p>
    <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
  </NavLink>
  <div className="h-6 w-px bg-gray-300"></div> {/* Vertical Line */}

  <NavLink to="/news" className="flex flex-col items-center gap-1">
    <p>NEWS & ANNOUNCEMENT</p>
    <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
  </NavLink>
  <div className="h-6 w-px bg-gray-300"></div> {/* Vertical Line */}

  <NavLink to="/calendar" className="flex flex-col items-center gap-1">
    <p>EVENT CALENDAR</p>
    <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
  </NavLink>
  <div className="h-6 w-px bg-gray-300"></div> {/* Vertical Line */}

  <NavLink to="/gallery" className="flex flex-col items-center gap-1">
    <p>EVENT GALLERY</p>
    <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
  </NavLink>
  <div className="h-6 w-px bg-gray-300"></div> {/* Vertical Line */}

  <NavLink to="/membership" className="flex flex-col items-center gap-1">
    <p>MEMBERSHIP</p>
    <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
  </NavLink>
  <div className="h-6 w-px bg-gray-300"></div> {/* Vertical Line */}

  <NavLink to="/contact" className="flex flex-col items-center gap-1">
    <p>CONTACT US</p>
    <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
  </NavLink>
</ul>


        <div className='flex items-center gap-6'>
            <button className='bg-yellow-400 px-3.5 py-1.5 rounded-md text-gray-950 text-sm'>JOIN US</button>
            <img src={assets.right_arrow} alt='Right Arrow'/>
        </div>
    </div>

  )
}

export default Navbar