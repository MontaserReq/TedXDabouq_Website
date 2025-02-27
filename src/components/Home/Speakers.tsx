"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImgKT from "@/app/(protected)/_components/ImgKT";
import Link from "next/link";

interface SpeakersProps {
  className?: string;
  speakersList?: {
    id: string;
    FName: string;
    LName: string;
    Imgpath: string;
    fileId: string;
    SocialLink?: string; // Made optional to prevent issues
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export default function Speakers({ className = "", speakersList = [] }: SpeakersProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [numVisibleSpeakers, setNumVisibleSpeakers] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const updateVisibleSpeakers = () => {
    const width = window.innerWidth;
    setNumVisibleSpeakers(width < 730 ? 1 : width < 1150 ? 2 : width < 1480 ? 3 : 4);
  };

  useEffect(() => {
    updateVisibleSpeakers();
    window.addEventListener("resize", updateVisibleSpeakers);
    return () => window.removeEventListener("resize", updateVisibleSpeakers);
  }, []);

  useEffect(() => {
    if (isHovered || speakersList.length <= numVisibleSpeakers) return;

    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % speakersList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, speakersList.length, numVisibleSpeakers]);

  if (speakersList.length === 0) {
    return (
      <div
        id="speakers"
        className={`${className} min-h-screen text-white flex items-center justify-center`}
      >
        <h2 className="text-3xl font-semibold">No Speakers Available</h2>
      </div>
    );
  }

  const visibleSpeakers = Array.from(
    { length: numVisibleSpeakers },
    (_, i) => speakersList[(startIndex + i) % speakersList.length]
  );

  return (
    <div
      id="speakers"
      className={`${className} min-h-screen text-white flex items-center justify-center relative`}
    >
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
              onClick={() => setStartIndex((prevIndex) => (prevIndex - 1 + speakersList.length) % speakersList.length)}
              className="absolute left-2 sm:left-4 lg:left-16 xl:left-16 min-lg:left-0 2xl:left-28  p-3 rounded-full hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:scale-110 z-10"
            >
              <ChevronLeft className="text-white w-8 h-8" />
            </button>

            <div className="flex justify-center w-full gap-10 sm:gap-6 md:gap-10 relative h-auto max-sm:overflow-hidden">
              {visibleSpeakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="flex flex-col items-center"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="flex items-end justify-center">
                    <Link
                      href={speaker.SocialLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-80 h-80 object-cover rounded-lg transition-all hover:grayscale-0 duration-300 ease-in-out grayscale hover:cursor-pointer hover:scale-110 hover:-translate-y-[5%]"
                    >
                      <ImgKT src={speaker.Imgpath} alt={speaker.FName} />
                    </Link>
                  </div>
                  <hr className="w-[85%] sm:w-[113%]  border-2 mb-4" />
                  <div className="text-xl font-semibold mt-4">
                    {speaker.FName} {speaker.LName}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStartIndex((prevIndex) => (prevIndex + 1) % speakersList.length)}
              className="absolute right-2 sm:right-4 lg:right-16 xl:right-16 min-lg:right-0 2xl:right-28 z-10 p-3 rounded-full hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:scale-110 "
            >
              <ChevronRight className="text-white w-8 h-8" />
            </button>
          </div>
          <div className="mt-6 text-lg font-semibold text-gray-300">
            {startIndex + 1} / {speakersList.length}
          </div>
        </div>
      </div>
    </div>
  );
}
