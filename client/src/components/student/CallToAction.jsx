import React from 'react'
import { assets } from '../../assets/assets'


const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>
        Learn anything, anytime, anywhere
      </h1>
      <p className='text-gray-500 sm:text-sm'>
        Unlock your potential with flexible, high-quality learning experiences. <br></br>
        Whether you're building new skills, exploring your passions, or advancing your career, 
        we've got you covered.
      </p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-indigo-500/90'>
          Get started
        </button>
        <button className='flex items-center gap-2'>
          Learn more 
          <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
</div>

     
  
  )
}

export default CallToAction
