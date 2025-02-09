'use client'
import React, { useState, useEffect } from "react";
import Footer from "./Footer";

interface TicketsProps {
  className: string;
}

export default function Tickets({ className }: TicketsProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-04-23T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="tickets"
      className={`${className} container mx-auto px-4 min-h-screen text-white flex flex-col gap-20 -space-y-6 items-center justify-center`}
    >
      {/* المؤقت */}
      <div className="flex ">
        <span className="bg-secondary-red p-10 text-3xl font-bold">
          {timeLeft.days}
        </span>
        <span className="items-center flex font-bold justify-center text-2xl m-2">
          :
        </span>
        <span className="bg-secondary-red text-3xl font-bold p-10">
          {timeLeft.hours}
        </span>
        <span className="items-center flex font-bold justify-center text-2xl m-2">
          :
        </span>
        <span className="bg-secondary-red text-3xl font-bold p-10">
          {timeLeft.minutes}
        </span>
        <span className="items-center flex font-bold justify-center text-2xl m-2">
          :
        </span>
        <span className="bg-secondary-red text-2xl font-bold p-10">
          {timeLeft.seconds}
        </span>
      </div>
      <div className="">
        <h1 className="text-4xl font-bold">Only 20 Tickets left</h1>
      </div>
      <div className="">
        <button className="bg-secondary-red text-3xl font-bold p-6 border-b-4 border-black">
          Get your ticket now
        </button>
      </div>
      <hr className="text-3xl text-white"/>
      <Footer className="absolute bottom-0" />
    </div>
  );
}
