import React from 'react'
import { assets } from '../../assets/assets'
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();


const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
    <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center 
    gap-10 md:gap-32 py-10 border-b border-white/30'>
      <div className='flex flex-col md:items-start items-center w-full'>
        {/* <img src={assets.logo_dark} alt="logo" /> */}
        <div className="flex items-center gap-1">
                  <img
                    onClick={() => navigate("/")}
                    src={assets.skillStack_logo2}
                    alt="Logo"
                    className="w-7 sm:w-9 lg:w-11 h-auto cursor-pointer"
                  />
                  <span
                    onClick={() => navigate("/")}
                    className="text-2xl font-bold tracking-wide text-white cursor-pointer"
                  >
                    SkillStack
                  </span>
                </div>
        <p className='mt-3 text-center md:text-left text-sm text-white/80'>
          SkillStack is your go-to platform for learning new skills anytime, anywhere.
           From beginner to advanced, we offer curated content to help you grow in your personal
            and professional journey.
        </p>
      </div>
      <div className='flex flex-col md:items-start items-center w-full'>
        <h2 className='font-semibold text-white mb-5'>Company</h2>
        <ul className='flex md:flex-col w-full justify-between text-sm
         text-white/80 md:space-y-2'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>
      <div className='hidden md:flex flex-col items-start w-full'>
        <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
        <p className='text-sm text-white/80'>
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <div className='flex items-center gap-2 pt-4'>
          <input 
            type="email" 
            placeholder='Enter your email' 
            className='border border-gray-500/30 bg-gray-800 text-gray-500
             placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'/>
          <button className='bg-indigo-500/90 w-24 h-9 text-white rounded'>Subscribe</button>
        </div>
      </div>
    </div>
    <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025 © SkillStack. All Right Reserved.</p>
  </footer>
  
  )
}

export default Footer
