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
  { id: 4, name: "Montaser", image: Speaker1 },
  { id: 5, name: "Omar Sabri", image: Speaker2 },
  { id: 6, name: "Mohammad", image: Speaker3 },
  { id: 7, name: "Sarah", image: Speaker4 },
];

export default function Speakers({ className }: SpeakersProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [numVisibleSpeakers, setNumVisibleSpeakers] = useState(1);

  const updateVisibleSpeakers = () => {
    if (window.innerWidth < 640) {
      setNumVisibleSpeakers(1);
    } else if (window.innerWidth < 1024) {
      setNumVisibleSpeakers(2);
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
  const visibleSpeakers = speakersList.slice(
    startIndex,
    startIndex + numVisibleSpeakers
  );

  const handleNext = () => {
    if (startIndex + numVisibleSpeakers < speakersList.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div
      id="speakers"
      className={`${className} min-h-screen text-white flex items-center justify-center relative`}
    >
      <div className="w-full flex flex-col gap-12 items-center justify-center relative">
        <div className="container flex items-center w-full max-sm:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold tracking-tighter relative">
            Speakers
          </h1>
          <div className="w-[35%] overflow-hidden border-t-2 max-sm:w-[25%] border-white absolute right-0" />
        </div>

        <div className="w-full flex items-center mt-10 relative">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="absolute left-4 p-3  rounded-full hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:scale-150 disabled:opacity-50 z-50"
          >
            <ChevronLeft className="text-white w-8 h-8" />
          </button>

          <div className="flex justify-center w-full gap-10 sm:gap-6 md:gap-10 lg:gap-16">
            {visibleSpeakers.map((speaker) => (
              <div key={speaker.id} className="flex flex-col items-center">
                <div className=" flex items-end justify-center">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-56 object-cover rounded-lg transition-all duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110 hover:-translate-y-[5%]"
                  />
                </div>
                <hr className="w-[200%] max-sm:w-[100%] border-2 mb-4" />
                <div className="text-xl font-semibold mt-4">{speaker.name}</div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + numVisibleSpeakers >= speakersList.length}
            className="absolute right-4 p-3 rounded-full hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:scale-150 disabled:opacity-50 z-50"
          >
            <ChevronRight className="text-white w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
