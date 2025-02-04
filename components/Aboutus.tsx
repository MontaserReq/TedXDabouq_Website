import Image from 'next/image';
import React from 'react';

interface AboutusProps {
  className?: string; // جعل className اختياريًا
}

function Aboutus({ className = '' }: AboutusProps) {
  return (
    <div id="aboutus" className={`${className} flex min-h-screen px-16 space-x-36 justify-evenly gap-16 items-center bg-[url('/images/Cover1.svg')] bg-cover bg-center bg-no-repeat`}>
     
        {/* <div className='text-white pb-16 relative'>
          <h1 className='sm:text-9xl  text-7xl font-semibold tracking-tighter relative'>
            <span className="absolute -left-7 top-6 w-4 h-4 bg-primary-red rounded-full"></span>
            About 
            <br />
            TEDxDabouq
          </h1>
          <p className='text-2xl font-semibold max-w-96 '>TEDxDabouq is an independently organized TED event that brings innovative ideas and inspiring stories to the community</p>
        </div>
        <div className="md:flex hidden flex-col">
          <div className="">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="relative w-full h-auto overflow-hidden transform transition-transform duration-500 hover:scale-110">
            <Image src="/images/AboutUs-Person.svg" alt="Image 1" width={600} height={500} className="object-cover" />
          </div>
          
          <div className="relative w-full h-auto overflow-hidden transform transition-transform duration-500 hover:scale-110">
            <Image src="/images/AboutUs-Person4.svg" alt="Image 2" width={600} height={500} className="object-cover" />
          </div>
          
          <div className="relative w-full h-auto overflow-hidden transform transition-transform duration-500 hover:scale-110">
            <Image src="/images/AboutUs-Person5.svg" alt="Image 3" width={600} height={500} className="object-cover" />
          </div>
          </div>
        </div>
        <div className="">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="relative w-full h-auto overflow-hidden transform transition-transform duration-500 hover:scale-110">
            <Image src="/images/AboutUs-Person.svg" alt="Image 1" width={600} height={500} className="object-cover" />
          </div>
          
          <div className="relative w-full h-auto overflow-hidden transform transition-transform duration-500 hover:scale-110">
            <Image src="/images/AboutUs-Person4.svg" alt="Image 2" width={600} height={500} className="object-cover" />
          </div>
          
          <div className="relative w-full h-auto overflow-hidden transform transition-transform duration-500 hover:scale-110">
            <Image src="/images/AboutUs-Person5.svg" alt="Image 3" width={600} height={500} className="object-cover" />
          </div>
          </div>
        </div>
        </div> */}

      </div>
  );
}

export default Aboutus;
