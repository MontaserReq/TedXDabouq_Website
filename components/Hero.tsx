import React from 'react'
import Image from 'next/image';
import { AiOutlinePlus } from "react-icons/ai";
import { Poppins } from 'next/font/google';
import Nav from './Nav';

interface HeroProps {
  className?: string;
}

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function Hero({ className }: HeroProps) {
  return (
    <div id='home' className={`relative ${poppins.className} `}>
      {/* Header Component */}
      <Nav  className='fixed w-full top-0 left-0 z-50'/>

      {/* Hero Section with space on left and right */}
      <div className={`${className} min-h-screen px-16 space-x-36 flex justify-evenly gap-16 items-center `}>
        <div className='text-white relative'>
          <h1 className='sm:text-9xl text-7xl font-semibold tracking-tighter relative'>
            <span className="absolute -left-7 top-6 w-4 h-4 bg-primary-red rounded-full"></span>
            TEDx
            <br />
            Dabouq
          </h1>
          <p className='text-2xl font-semibold'>Ideas Worth Spreading in Dabouq</p>
        </div>

        <div className='text-white lg:flex hidden justify-between flex-col space-y-6 '>
        <h1 className="text-4xl flex justify-start tracking-tighter p-6">
          Join us for an inspiring day of <br />talks and ideas at TEDxDabouq
        </h1>

          <div className="flex flex-col gap-y-6 pt-10">
            <div className="flex items-center">
              <AiOutlinePlus  className="text-primary-red font-thin w-6 h-6 ml-2" />
              <hr className="w-1/2 border-t-2 border-white ml-auto" />
            </div>
            <div className="flex justify-center">
              <button className="relative top-16 lg:top-32 uppercase text-black bg-white rounded-lg px-16 py-2">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Microphone Image at the bottom center */}
        <div className="absolute bottom-0 hidden xl:flex left-[550px] transform -translate-x-1/2">
          <Image
            src="/images/Microphone.svg"
            alt="microphone"
            width={3000}  // You can adjust the width to make it bigger or smaller
            height={3000} // Adjust the height accordingly
            className="object-cover h-[700px]"
          />
        </div>
      </div>
    </div>
  );
}
