import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

interface AboutusProps {
  className?: string; // جعل className اختياريًا
}
const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
function Aboutus({ className = '' }: AboutusProps) {
  return (
    <div id='aboutus' className={` ${poppins.className} container mx-auto px-4 `}>
          <div className={`${className}  mx-auto min-h-screen px-16 space-x-36 flex justify-evenly gap-16 items-center `}>
            <div className='text-white relative space-y-3 lg:text-9xl text-3xl xsm:text-7xl sm:text-6xl '>
              <h1 className=' font-semibold tracking-tighter  relative'>
                <span className="absolute -left-7 top-6 w-4 h-4 bg-primary-red rounded-full"></span>
                About 
                <br />
                TEDxDabouq
              </h1>
              <p className='text-lg sm:text-2xl font-semibold'>TEDxDabouq is an independently organized TED event that brings innovative ideas and inspiring stories to the community</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 pt-10">
          </div>
        </div>

  );
}

export default Aboutus;
