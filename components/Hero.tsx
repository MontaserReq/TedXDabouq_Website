import React from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Poppins } from "next/font/google";
import Nav from "./Nav";

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
      className={`relative ${poppins.className} flex justify-center items-center w-full max-w-2xl`}
    >
      <Nav className="fixed w-full top-0 left-0 z-50" />
      <div
        className={`${className} min-h-screen w-full flex flex-col md:flex-row md:items-center md:justify-center gap-4 max-sm:px-8`}
      >
        <div className="flex max-sm:flex-col sm:gap-4 md:justify-between w-full">
          <div className="text-white relative gap-2 flex flex-col md:gap-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter relative">
              <span className="absolute -left-4 top-2 w-2 h-2 bg-primary-red rounded-full animate-pulse"></span>
              TEDx
              <br />
              Dabouq
            </h1>
            <p className="text-sm md:text-base font-semibold">
              Ideas Worth Spreading in Dabouq
            </p>
          </div>
          <div className="text-white justify-between relative">
            <div className="h-full flex flex-col justify-evenly">
              <h1 className="text-sm md:text-lg flex tracking-tighter">
                Join us for an inspiring day of talks and ideas at TEDxDabouq
              </h1>
              <div className="flex flex-col gap-y-6">
                <div className="flex items-center">
                  <AiOutlinePlus className="text-primary-red font-thin w-6 h-6 " />
                  <hr className="w-[80%] border-t-2 border-white ml-auto" />
                </div>
              </div>
            </div>
            <div className="flex justify-center absolute left-[50%] -translate-x-[50%] whitespace-nowrap">
              <button className="uppercase text-xs md:text-sm py-2 px-8 text-black bg-white rounded-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 hidden xl:flex left-[50%] transform -translate-x-1/2">
          <Image
            src="/images/Microphone.png"
            alt="microphone"
            width={600}
            height={600}
            className="object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
}
