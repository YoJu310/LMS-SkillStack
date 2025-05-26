import React from 'react'
import { assets } from '../../assets/assets'
import './Companies.css';

 

const Companies = () => {

  const logos = [
    assets.microsoft_logo,
    assets.walmart_logo,
    assets.accenture_logo,
    assets.adobe_logo,
    assets.paypal_logo,
  ];

  return (

    // <div className='pt-16'>
    //     <p className='text-base text-gray-500'>Trusted by learners from</p>
    //     <div className='flex flex-wrap items-center justify-center gap-6 
    //     md:gap-16 md:mt-10 mt-5'>
    //       <img src={assets.microsoft_logo} alt="Microsoft" className='w-20 md:w-28' />
    //       <img src={assets.walmart_logo} alt="Walmart" className='w-20 md:w-28' />
    //       <img src={assets.accenture_logo} alt="Accenture" className='w-20 md:w-28' />
    //       <img src={assets.adobe_logo} alt="Adobe" className='w-20 md:w-28' />
    //       <img src={assets.paypal_logo} alt="Paypal" className='w-20 md:w-28' />
    //     </div>
    // </div>
    // <div className="pt-16 overflow-hidden">
    //   <p className="text-base text-gray-500 text-center">Trusted by learners from</p>

    //   <div className="mt-5 md:mt-10 whitespace-nowrap">
    //     <div className="flex gap-16 animate-marquee">
    //       {/* Repeat logos twice for seamless loop */}
    //       {[...Array(2)].map((_, i) => (
    //         <React.Fragment key={i}>
    //           <img src={assets.microsoft_logo} alt="Microsoft" className="w-20 md:w-28 inline-block" />
    //           <img src={assets.walmart_logo} alt="Walmart" className="w-20 md:w-28 inline-block" />
    //           <img src={assets.accenture_logo} alt="Accenture" className="w-20 md:w-28 inline-block" />
    //           <img src={assets.adobe_logo} alt="Adobe" className="w-20 md:w-28 inline-block" />
    //           <img src={assets.paypal_logo} alt="Paypal" className="w-20 md:w-28 inline-block" />
    //         </React.Fragment>
    //       ))}
    //     </div>
    //   </div>
    // </div>


      <div className="pt-16">
      <p className="text-base text-gray-500 text-center">Trusted by learners from</p>
      
      <div className="marquee-container mx-auto mt-5 md:mt-10">
        <div className="marquee-track">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="w-20 md:w-28 mx-6"
            />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Companies
