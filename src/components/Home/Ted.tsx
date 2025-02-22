import { Poppins } from "next/font/google";
import React from "react";

interface AboutusProps {
  className?: string;
}

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

function Ted({ className = "" }: AboutusProps) {
  return (
    <div
      id="ted"
      className={`${poppins.className} container mx-auto px-6 h-full flex flex-col items-center`}
    >
      <div
        className={`${className} w-full flex flex-col justify-center items-center gap-6 md:gap-0 lg:gap-16 xl:gap-0`}
      >
        <div className="text-white relative block space-y-3 font-semibold">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold tracking-tighter relative">
            <span className="absolute -left-2 top-2 w-2 h-2 xl:w-4 xl:h-4 xl:-left-10 xl:top-4 bg-primary-red rounded-full animate-pulse" />
            About TEDx
          </h1>
        </div>
        <div className="w-full h-[50%] ">
          
        </div>
      </div>
    </div>
  );
}

export default Ted;
