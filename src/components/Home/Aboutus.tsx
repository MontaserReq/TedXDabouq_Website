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
    <div
      id="aboutus"
      className={`${poppins.className} container mx-auto px-6 h-full flex flex-col lg:flex-row justify-start items-start`}
    >
      <div
        className={`${className} w-full flex flex-col  justify-center lg:flex-row gap-0 md:gap-10 lg:gap-16 xl:gap-0`}
      >
        <div className="text-white bottom-20 lg:bottom-0  relative lg:left-0 lg:translate-x-[0%] left-[50%] translate-x-[-50%] space-y-3 font-semibold ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold tracking-tighter relative">
            <span className="absolute -left-2 top-2 w-2 h-2 xl:w-4 xl:h-4 xl:-left-10 xl:top-4 bg-primary-red rounded-full animate-pulse" />
            About
            <br />
            TEDxDabouq
          </h1>
          <p className="text-sm max-w-[100%] md:text-base md:max-w-[80%]  lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-center">
            TEDxDabouq is an independently organized TED event that brings
            innovative ideas and inspiring stories to the community
          </p>
        </div>
        <div className="w-full relative">
          <Image
            src="/images/Img1-Ted.png"
            alt="Ted Speaker"
            width={150}
            height={232}
            className="aspect-[1/1] max-w-[200px] w-full hidden absolute lg:block ml-2 top-0 -translate-y-52 left-0 min-xl:left-14 xl:left-14 2xl:left-28 grayscale transition-all  hover:grayscale-0 duration-300 ease-in-out  hover:cursor-pointer hover:scale-105"
          />
          <Image
            src="/images/Img3-Ted.png"
            alt="Ted Speaker"
            width={150}
            height={232}
            className="aspect-[1/1] max-w-[200px] w-full hidden absolute lg:block ml-2 -translate-y-52 right-0 min-xl:right-14 xl:right-14 2xl:right-28  grayscale   hover:grayscale-0 duration-300 ease-in-out  hover:cursor-pointer hover:scale-105"
          />
          <Image
            src="/images/Img2-Ted.png"
            alt="Ted Speaker"
            width={150}
            height={232}
            className="aspect-[16/9] max-w-[370px] mb-20 absolute right-[50%]  translate-x-[50%] lg:max-w-[500px] w-full ml-28 grayscale transition-all  hover:grayscale-0 duration-300 ease-in-out  hover:cursor-pointer hover:scale-105 "
          />
        </div>
      </div>
      {/* <div className="flex gap-6 md:gap-10 lg:gap-12 max-sm:hidden">
        <Image
          src="/images/aboutImg6.svg"
          alt="Ted Speaker"
          width={125}
          height={232}
          className="w-[100px]"
        />
        <Image
          src="/images/aboutImg4.svg"
          alt="Ted Speaker"
          width={125}
          height={232}
          className="w-[100px]"
        />
        <Image
          src="/images/aboutImg5.svg"
          alt="Ted Speaker"
          width={125}
          height={232}
          className="w-[100px]"
        />
      </div> */}
    </div>
  );
}

export default Aboutus;
