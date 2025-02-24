import { getAllSponsers } from "@/data/sponsers";
import { Bebas_Neue, Poppins } from "next/font/google";

interface SponsorsProps {
  className?: string;
}
const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const bebus = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});
async function Sponsors({className=""}: SponsorsProps) {
  const sponsors = await getAllSponsers();

  if (!sponsors || sponsors.length === 0) {
    return <p>No Sponsers found.</p>;
  }

  return (
    <div
      id="aboutus"
      className={`${poppins.className} container mx-auto px-6 h-full flex flex-col items-center`}
    >
      <div
        className={`{${className} h-screen mx- w-full flex gap-14 justify-normal lg:justify-stretch`}
      >
        <div className="hidden lg:flex flex-col justify-center gap-6 items-center text-4xl font-bold -rotate-90">
          <p>Thanks To Our</p>
          <span className="text-transparent [-webkit-text-stroke:1px_white] text-8xl font-bold ">
            Sponsors
          </span>
        </div>
        <div
          className={`${bebus.className} text-center flex flex-col items-center justify-center lg:flex lg:items-center lg:justify-center gap-5`}
        >
          <div className="flex gap-6 flex-col ">
            <h1 className="text-center uppercase font-bold text-4xl md:text-5xl text-white text-glow-p">
              platinum sponsor
            </h1>
            <div className="border-t border-gray-500 w-full mx-auto" />
            <div className="flex gap-4 text-2xl sm:text-3xl lg:text-4xl text-nowrap">
              {sponsors
                .filter((sponsor) => sponsor.Category === "Platinum")
                .map((sponsor, index) => (
                  <p key={index}>{sponsor.Name}</p>
                ))}
            </div>
          </div>
          <div className="flex justify-center gap-6 flex-col">
            <h1 className="text-center uppercase font-bold text-3xl text-glow-y">
              Gold sponsors
            </h1>
            <div className="border-t border-gray-500 w-full mx-auto" />
            <div className="flex gap-8 text-lg sm:text-2xl lg:text-3xl">
              {sponsors
                .filter((sponsor) => sponsor.Category === "Gold")
                .map((sponsor, index) => (
                  <p key={index}>{sponsor.Name}</p>
                ))}
            </div>
          </div>
          <div className="flex justify-center gap-6 flex-col">
            <h1 className="text-center uppercase font-bold text-2xl text-glow-s">
              Silver sponsors
            </h1>
            <div className="border-t border-gray-500 w-full mx-auto text-nowrap" />
            <div className="flex gap-8 text-lg sm:text-2xl lg:text2xl">
              {sponsors
                .filter((sponsor) => sponsor.Category === "Silver")
                .map((sponsor, index) => (
                  <p key={index}>{sponsor.Name}</p>
                ))}
            </div>
          </div>
          <div className="flex justify-center gap-6 flex-col">
            <h1 className="text-center uppercase font-bold text-xl text-glow-b ">
              Bronze sponsors
            </h1>
            <div className="border-t border-gray-500 w-full mx-auto" />
            <div className="flex gap-12 text-sm sm:text-xl lg:text-xl">
              {sponsors
                .filter((sponsor) => sponsor.Category === "Bronze")
                .map((sponsor, index) => (
                  <p key={index}>{sponsor.Name}</p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
