import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

interface AboutusProps {
  className?: string;
}

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

function Aboutus({ className = "" }: AboutusProps) {
  return (
    <div id="aboutus" className={`${poppins.className} container mx-auto px-6 h-full flex flex-col items-center`}>
      <div className={`${className} w-full flex flex-col md:flex-row items-end gap-6 md:gap-12 lg:gap-16 xl:gap-20`}>
        <div className="text-white relative space-y-3 font-semibold">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold tracking-tighter relative">
            <span className="absolute -left-2 top-2 w-2 h-2 xl:w-4 xl:h-4 xl:-left-5 xl:top-4 bg-primary-red rounded-full animate-pulse" />
            About
            <br />
            TEDxDabouq
          </h1>
          <p className="text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
            TEDxDabouq is an independently organized TED event that brings
            innovative ideas and inspiring stories to the community
          </p>
        </div>
        <div className="flex gap-2 self-center md:gap-10 lg:gap-12 md:self-end flex-wrap justify-center">
          <Image
            src="/images/aboutImg1.svg"
            alt="Ted Speaker"
            width={150}
            height={232}
            className="aspect-[3/4] max-w-[150px] w-full md:w-auto"
          />
          <Image
            src="/images/aboutImg2.svg"
            alt="Ted Speaker"
            width={150}
            height={232}
            className="aspect-[3/4] max-w-[150px] w-full md:w-auto"
          />
          <Image
            src="/images/aboutImg3.svg"
            alt="Ted Speaker"
            width={150}
            height={232}
            className="aspect-[3/4] max-w-[150px] w-full md:w-auto"
          />
        </div>
      </div>
      <div className="flex gap-6 md:gap-10 lg:gap-12 max-sm:hidden">
        <Image src="/images/aboutImg6.svg" alt="Ted Speaker" width={125} height={232} className="w-[100px]" />
        <Image src="/images/aboutImg4.svg" alt="Ted Speaker" width={125} height={232} className="w-[100px]" />
        <Image src="/images/aboutImg5.svg" alt="Ted Speaker" width={125} height={232} className="w-[100px]" />
      </div>
    </div>
  );
}

export default Aboutus;