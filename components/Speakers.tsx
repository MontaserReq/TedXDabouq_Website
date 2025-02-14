"use client";

import React, { useState, useEffect } from "react";
import Speaker1 from "../public/images/Omar.png";
import Speaker2 from "../public/images/Img1.png";
import Speaker3 from "../public/images/Img2.png";
import Speaker4 from "../public/images/Img3.png";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SpeakersProps {
  className: string;
}

const speakersList = [
  { id: 0, name: "Montaser", image: Speaker1 },
  { id: 1, name: "Omar Sabri", image: Speaker2 },
  { id: 2, name: "Mohammad", image: Speaker3 },
  { id: 3, name: "Sarah", image: Speaker4 },
  { id: 5, name: "Montaser", image: Speaker1 },
  { id: 6, name: "Omar Sabri", image: Speaker2 },
  { id: 7, name: "Mohammad", image: Speaker3 },
  { id: 8, name: "Sarah", image: Speaker4 },
  { id: 9, name: "Montaser", image: Speaker1 },
  { id: 10, name: "Omar Sabri", image: Speaker2 },
  { id: 11, name: "Mohammad", image: Speaker3 },
  { id: 12, name: "Sarah", image: Speaker4 },
];

export default function Speakers({ className }: SpeakersProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [numVisibleSpeakers, setNumVisibleSpeakers] = useState(1);

  const updateVisibleSpeakers = () => {
    if (window.innerWidth < 640) {
      setNumVisibleSpeakers(1);
    } else if (window.innerWidth < 850) {
      setNumVisibleSpeakers(2);
    } else if (window.innerWidth < 1105) {
      setNumVisibleSpeakers(3);
    } else {
      setNumVisibleSpeakers(4);
    }
  };

  useEffect(() => {
    updateVisibleSpeakers();
    window.addEventListener("resize", updateVisibleSpeakers);
    return () => {
      window.removeEventListener("resize", updateVisibleSpeakers);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % speakersList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleSpeakers = Array.from({ length: numVisibleSpeakers }, (_, i) => 
    speakersList[(startIndex + i) % speakersList.length]
  );

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % speakersList.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + speakersList.length) % speakersList.length);
  };

  return (
    <div id="speakers" className={`${className} min-h-screen text-white flex items-center justify-center relative`}>
      <div className="w-full flex flex-col gap-12 items-center justify-center relative">
        <div className="container flex items-center w-full max-sm:px-6 mt-16 sm:mt-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold tracking-tighter relative">
            Speakers
          </h1>
          <div className="w-[35%] overflow-hidden border-t-2 max-sm:w-[25%] border-white absolute right-0" />
        </div>

        <div className="w-full flex flex-col items-center mt-10 relative">
          <div className="relative w-full flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 lg:left-16  xl:left-16  min-lg:left-0 2xl:left-52 p-3 rounded-full hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:scale-110 z-50"
            >
              <ChevronLeft className="text-white w-8 h-8" />
            </button>

            <div className="flex justify-center w-full gap-10 sm:gap-6 md:gap-10 relative">
              {visibleSpeakers.map((speaker, index) => (
                <div key={speaker.id} className="flex flex-col items-center">
                  <div className="flex items-end justify-center">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-56 h-80 hover:grayscale-0 object-cover rounded-lg transition-all duration-300 ease-in-out grayscale hover:cursor-pointer hover:scale-110 hover:-translate-y-[5%]"
                      width={224}
                      height={290}
                    />
                  </div>
                  <hr className="w-[130%] border-2 mb-4" />
                  <div className="text-xl font-semibold mt-4">{speaker.name}</div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 lg:right-16  xl:right-16  min-lg:right-0 2xl:right-52 p-3 rounded-full hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:scale-110 z-50"
            >
              <ChevronRight className="text-white w-8 h-8" />
            </button>
          </div>

          {/* Counter Display */}
          <div className="mt-6 text-lg font-semibold text-gray-300">
            {startIndex + 1} / {speakersList.length}
          </div>
        </div>
      </div>
    </div>
  );
}
