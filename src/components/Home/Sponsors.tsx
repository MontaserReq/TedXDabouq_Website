import { Bebas_Neue, Poppins } from 'next/font/google';
import React from 'react';

interface SponsorsProps {
  className?: string; 
}
const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const bebus = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});
function Sponsors({ className = '' }: SponsorsProps) {
  return (
    <div id="aboutus" className={`${poppins.className} container  mx-14 px-6 text-white h-full flex flex-col `}>
      <div className={`{${className}  h-screen mx- w-full flex gap-16 justify-stretch`}>
        <div className="hidden lg:flex flex-col justify-center gap-6 items-center text-4xl font-bold -rotate-90">
          <p >Thanks To Our</p>
          <span className="text-transparent [-webkit-text-stroke:1px_white] text-8xl font-bold ">Sponsors</span>
        </div>
        <div className={`${bebus.className} text-center flex flex-col items-center justify-center lg:flex lg:items-center lg:justify-center gap-5`}>
        {/* Diamond Sponsors */ }
        <div className="flex gap-6 flex-col ">
          <h1 className="text-center uppercase font-bold text-5xl text-white text-glow-p">platinum sponsor</h1>
            <div className="border-t border-gray-500 w-full mx-auto" />
              <div className="flex gap-12 text-4xl">
                <p>Arab Bank</p>
                <p>Arab Bank</p>
                <p>Arab Bank</p>
              </div>
        </div>
        {/* Gold Sponsors */}
        <div className="flex justify-center gap-6 flex-col">
          <h1 className="text-center uppercase font-bold text-4xl text-glow-y">Gold sponsors</h1>
            <div className="border-t border-gray-500 w-full mx-auto" />
                <div className="flex gap-12 text-3xl">
                  <p>Arab Bank</p>
                  <p>Arab Bank</p>
                  <p>Arab Bank</p>
                </div>
        </div>
        {/* Silver Sponsors */}
        <div className="flex justify-center gap-6 flex-col">
          <h1 className="text-center uppercase font-bold text-3xl text-glow-s">Silver sponsors</h1>
            <div className="border-t border-gray-500 w-full mx-auto" />
              <div className="flex gap-12 text-2xl">
                <p>Arab Bank</p>
                <p>Arab Bank</p>
                <p>Arab Bank</p>
              </div>
        </div>
        {/* Bronze Sponsors */}
        <div className="flex justify-center gap-6 flex-col">
          <h1 className="text-center uppercase font-bold text-2xl text-glow-b ">Bronze sponsors</h1>
            <div className="border-t border-gray-500 w-full mx-auto" />
              <div className="flex gap-12 text-xl">
                <p>Arab Bank</p>
                <p>Arab Bank</p>
                <p>Arab Bank</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
