import React from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Poppins } from "next/font/google";
import Nav from "./Nav";
import Link from "next/link";

interface HeroProps {
  className?: string;
}

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function Hero({ className }: HeroProps) {
  return (
    <div
      id="home"
      className={`relative ${poppins.className} flex justify-center items-center w-full max-w-7xl px-8 md:px-8 lg:px-16`}
    >
      <Nav className="fixed w-full top-3 left-0 z-50 " />

      <div
        className={`min-h-screen w-full flex flex-col md:flex-row md:items-center md:justify-center  gap-4 ${className}`}
      >
        <div className="flex flex-col  sm:flex-row sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 -mt-40 2xl:gap-8 md:justify-between w-full max-sm:max-w-[320px]">
          <div className=" relative flex flex-col gap-2 md:gap-4">
            <h1 className="text-5xl text-secondary-red md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold tracking-tighter relative">
              <span className="absolute -left-4 top-2 w-2 h-2 xl:w-4 xl:h-4 xl:-left-5 xl:top-4 bg-primary-red rounded-full animate-pulse" />
              TEDx
              <br />
              <span className="text-white">Dabouq</span>
            </h1>
            <p className="text-sm text-white md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
              Ideas Worth Spreading in Dabouq
            </p>
          </div>
          <div className="text-white relative">
            <div className="h-full flex flex-col justify-evenly">
              <h1 className="text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pl-16  tracking-tighter">
                Join us for an inspiring day of talks and ideas at TEDxDabouq
              </h1>
              <div className="flex flex-col gap-y-6">
                <div className="flex items-center">
                  <AiOutlinePlus className="text-primary-red font-thin w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
                  <hr className="w-[80%] border-t-2 border-white ml-auto" />
                </div>
              </div>
            </div>
            <div className="flex justify-center absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
              <Link
                href="https://www.ted.com/tedx/events/59605"
                className="uppercase text-xs md:text-sm lg:text-base xl:text-lg py-2 px-8 text-black bg-white rounded-lg"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 xl:flex left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/Microphone.png"
            alt="microphone"
            width={600}
            height={600}
            priority
            className="object-cover w-auto h-[280px] sm:h-[320px] lg:h-[350px] max-sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
