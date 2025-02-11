"use client";

import React, { useState } from "react";
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
  const visibleSpeakers = speakersList.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex + 4 < speakersList.length) {
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
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <div className="flex justify-between w-full h-32 pl-10">
          <h1 className="text-8xl font-poppins">Speakers</h1>
          <div className="w-[35%] overflow-hidden border-t-2 border-white"></div>
        </div>

        <div className="w-full flex items-center mt-10 relative">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="absolute left-4 p-3  rounded-full hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:scale-150 disabled:opacity-50"
          >
            <ChevronLeft className="text-white w-8 h-8" />
          </button>

          <div className="flex justify-center w-full gap-20">
            {visibleSpeakers.map((speaker) => (
              <div key={speaker.id} className="flex flex-col items-center">
                <div className=" flex items-end justify-center">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-56 object-cover rounded-lg transition-all duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110 hover:-translate-y-[5%]"
                  />
                </div>
                <hr className="w-[200%] border-2 mb-4" />
                <div className="text-xl font-semibold mt-4">{speaker.name}</div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + 4 >= speakersList.length}
            className="absolute right-4 p-3 rounded-full hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:scale-150 disabled:opacity-50"
          >
            <ChevronRight className="text-white w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
