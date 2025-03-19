"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
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
  const [imageSrc, setImageSrc] = useState("/images/TedMobile.png");
  const [imageSize, setImageSize] = useState({ width: 1000, height: 500 });

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth >= 1024) {
        // PC size: Use bigger image
        setImageSrc("/images/TedPC.png");
        setImageSize({ width: 25000, height: 12000 }); // Increase size on PC
      } else if (window.innerWidth>= 444){
        // Mobile size
        setImageSrc("/images/TedMobile.png");
        setImageSize({ width: 25000, height: 12000 }); // Smaller on mobile
      }
      else{
        setImageSrc("/images/Small-mobile.png");
        setImageSize({ width: 30000, height: 18000 });
      }
    };

    updateImage(); // Set initial size
    window.addEventListener("resize", updateImage); // Update on resize

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div
      id="ted"
      className={`${poppins.className} container mx-auto px-6 h-full flex flex-col items-center`}
    >
      <div
        className={`${className} w-full flex flex-col justify-center items-center  gap-6 md:gap-0 lg:gap-16 xl:gap-0`}
      >

        <div className="w-full h-full  relative">
          <Image
            src={imageSrc}
            alt="TEDx"
            width={imageSize.width}
            height={imageSize.height}
            className="w-auto h-full left-[50%] -translate-x-[50%] absolute object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Ted;
