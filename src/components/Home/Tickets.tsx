"use client";
import Footer from "./Footer";

interface TicketsProps {
  className: string;
}

export default function Tickets({ className }: TicketsProps) {
  // const [timeLeft, setTimeLeft] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  // useEffect(() => {
  //   const targetDate = new Date("2025-04-23T00:00:00").getTime();

  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const difference = targetDate - now;

  //     if (difference <= 0) {
  //       clearInterval(interval);
  //       return;
  //     }

  //     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //     setTimeLeft({ days, hours, minutes, seconds });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // Helper function to ensure two digits
  // const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <div
      id="tickets"
      className={`${className} container mx-auto px-4 min-h-screen text-white flex flex-col gap-10 sm:gap-16 md:gap-20 -space-y-6 items-center justify-center`}
    >
      <div className="flex flex-nowrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <span className="bg-secondary-red p-2 sm:p-4 md:p-6 text-2xl sm:text-3xl md:text-4xl font-bold">
          {/* {formatTime(timeLeft.days)} */}S
        </span>
        <span className="items-center flex font-bold justify-center text-2xl m-2">
          :
        </span>
        <span className="bg-secondary-red text-2xl sm:text-3xl md:text-4xl font-bold p-2 sm:p-4 md:p-6">
          {/* {formatTime(timeLeft.hours)} */}O
        </span>
        <span className="items-center flex font-bold justify-center text-2xl m-2">
          :
        </span>
        <span className="bg-secondary-red text-2xl sm:text-3xl md:text-4xl font-bold p-2 sm:p-4 md:p-6">
          {/* {formatTime(timeLeft.minutes)} */}O
        </span>
        <span className="items-center flex font-bold justify-center text-2xl m-2">
          :
        </span>
        <span className="bg-secondary-red text-2xl sm:text-3xl md:text-4xl font-bold p-2 sm:p-4 md:p-6">
          {/* {formatTime(timeLeft.seconds)} */}N
        </span>
      </div>

      <div className="text-center mt-4 sm:mt-6 md:mt-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Wanna get your Ticket ?!
        </h1>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10">
        <button className="bg-secondary-red text-xl sm:text-2xl font-bold p-6 sm:p-8 md:p-10 border-b-4 border-black hover:bg-secondary-red/85 transition duration-300">
          Coming Soon!
        </button>
      </div>

      <hr className="text-3xl text-white mt-10" />
      <Footer className="absolute bottom-0" />
    </div>
  );
}