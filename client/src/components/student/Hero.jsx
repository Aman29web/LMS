import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col  items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Empower your future with the courses desifned to <span className='text-blue-600'>fit your choice.</span> <img src={assets.sketch} alt="" className='md:block hidden absolute -bottom-7 right-0' /> </h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate id voluptatibus, quos consectetur est, deleniti error odit ducimus ex ad fugit repudiandae laudantium ipsa?</p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium ullam dicta.</p>

      <SearchBar/>
    </div>
  )
}

export default Hero
