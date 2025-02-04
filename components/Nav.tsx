"use client";

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${className} pt-5 flex justify-around items-start`}>
      {/* Logo Tedx */}
      <div>
        <a href="#home">
          <Image 
            src="/images/TedxDabouqLogo.svg" 
            alt="TedxDabouqLogo" 
            width={190}  
            height={190} 
            className="max-w-full max-h-full"
          />
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="xl:flex hidden gap-[90px] mt-8">
        <a href="#home" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Home
        </a>
        <a href="#aboutus" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          About
        </a>
        <a href="#speakers" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Speakers
        </a>
        <a href="#schedule" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Schedule
        </a>
        <a href="#tickets" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Tickets
        </a>
        <a href="#media" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Media
        </a>
        <a href="#contact" className={`${poppins.className} text-white hover:text-primary-red uppercase py-2`}>
          Contact
        </a>
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
        <div className="text-start bg-[url('/images/Cover.svg')] bg-cover bg-center bg-no-repeat fixed top-0 right-0 lg:w-1/2 w-full h-full bg-cyan z-50 shadow-2xl transition-all duration-500 ease-in-out bg-primary-gray">
          <div className="flex flex-col p-4 h-full">
            <button onClick={closeMenu} className="self-end mr-14 mt-7 text-secondary-red font-bold text-5xl focus:outline-none">
              &times;            
            </button>

            <div className="flex flex-col space-y-2 mt-8">
              <a href="#home" onClick={closeMenu} className="font-semibold text-2xl py-3 text-white hover:text-primary-red text-center">
                Home
              </a>
              <a href="#aboutus" onClick={closeMenu} className="text-white font-semibold hover:text-primary-red text-2xl py-3 text-center">
                About
              </a>
              <a href="#speakers" onClick={closeMenu} className="text-white font-semibold hover:text-primary-red text-2xl py-3 text-center">
                Speakers
              </a>
              <a href="#schedule" onClick={closeMenu} className="text-white font-semibold hover:text-primary-red text-2xl py-3 text-center">
                Schedule
              </a>
              <a href="#tickets" onClick={closeMenu} className="text-white font-semibold hover:text-primary-red text-2xl py-3 text-center">
                Tickets
              </a>
              <a href="#media" onClick={closeMenu} className="text-white font-semibold hover:text-primary-red text-2xl py-3 text-center">
                Media
              </a>
              <a href="#contact" onClick={closeMenu} className="text-white font-semibold hover:text-primary-red text-2xl py-3 text-center">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
