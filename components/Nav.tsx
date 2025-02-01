"use client";

import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface NavProps {
  className?: string;
}

export default function Nav({ className }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${className} pt-5 flex justify-around items-start `}>
      {/* Logo Tedx */}
      <div>
        <Link href="/">
          <Image 
            src="/images/TedxDabouqLogo.svg" 
            alt="TedxDabouqLogo" 
            width={190}  
            height={190} 
            className="max-w-full max-h-full"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="xl:flex hidden gap-[90px] mt-8">
        <Link href="/" className={`${poppins.className} text-white hover:text-primary-red active:text-primary-red uppercase py-2`}>
          Home
        </Link>
        <Link href="/components/Aboutus" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Aboutus
        </Link>
        <Link href="/components/Speakers.tsx" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Speakers
        </Link>
        <Link href="/components/Schedule.tsx" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Schedule
        </Link>
        <Link href="/components/Tickets.tsx" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Tickets
        </Link>
        <Link href="/components/Media.tsx" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Media
        </Link>
        <Link href="/components/Contact.tsx" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Contact
        </Link>
      </div>

      {/* Burger icon for mobile view */}
      <div className="xl:hidden flex -mt-16 md:ml-[250px] ml-[30px]">
        <button onClick={toggleMenu} className="p-2">
          <img 
            src="/images/Microphone.svg" 
            alt="Microphone Icon" 
            width={230} 
            height={230} 
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="text-start bg-[url('/images/Cover.svg')] bg-cover bg-center bg-no-repeat fixed top-0 right-0 lg:w-1/2 w-full h-full bg-cyan z-50 shadow-2xl transition-all duration-500 ease-in-out bg-primary-gray translate-x-0 opacity-100">
          <div className="flex flex-col p-4 h-full">
            <button onClick={() => setIsMenuOpen(false)} className="self-end mr-14 mt-7 text-secondary-red font-bold text-5xl focus:outline-none">
              &times;            
              </button>

            <div className="flex flex-col space-y-2 mt-8">
              <Link href="/" className="font-semibold text-2xl py-3 text-white hover:text-primary-red text-center">
                Home
              </Link>
              <Link href="/components/Aboutus" className="text-white font-semibold hover:text-primary-red  text-2xl py-3 text-center">
                Aboutus
              </Link>
              <Link href="/components/Speakers" className="text-white font-semibold hover:text-primary-red text-2xl py-3 text-center">
                Speakers
              </Link>
              <Link href="/components/Schedules" className="text-white font-semibold hover:text-primary-red text-2xl py-3 text-center">
                Schedules
              </Link>
              <Link href="/components/Tickets" className="text-white font-semibold hover:text-primary-red text-2xl py-3 text-center">
                Tickets
              </Link>
              <Link href="/components/Media.tsx" className="text-white hover:text-primary-red font-semibold text-2xl py-3 text-center">
                Media
              </Link>
              <Link href="/components/Contact.tsx" className="text-white hover:text-primary-red font-semibold text-2xl py-3 text-center">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
