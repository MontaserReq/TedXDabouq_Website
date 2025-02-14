import { Poppins } from 'next/font/google';
import React from 'react';

interface SponsorsProps {
  className?: string; // جعل className اختياريًا
}
const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
function Sponsors({ className = '' }: SponsorsProps) {
  return (
    <div id='sponsors' className={` ${poppins.className}  `}>
          <div className={`${className}  mx-auto min-h-screen px-16 space-x-36 flex justify-evenly gap-16 items-center text-white text-xl `}>
          
          </div>
        </div>

  );
}

export default Sponsors;
