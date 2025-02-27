import ImgKT from "@/app/(protected)/_components/ImgKT";
import { getAllSponsers } from "@/data/sponsers";
import { Bebas_Neue, Poppins } from "next/font/google";
import Link from "next/link";

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
async function Sponsors({ className = "" }: SponsorsProps) {
  const sponsors = await getAllSponsers();

  if (!sponsors || sponsors.length === 0) {
    return (
      <div
        id="Sponsors"
        className={`${className} min-h-screen text-white flex items-center justify-center`}
      >
        <h2 className="text-3xl font-semibold">No Sponsors Available</h2>
      </div>
    );
  }
  return (
    <div
      id="aboutus"
      className={`${poppins.className} container mx-auto px-6 h-full flex flex-col items-center text-white`}
    >
      <div
        className={`{${className} h-screen mx- w-full flex gap-14 justify-normal lg:justify-stretch`}
      >
        <div className="hidden lg:flex flex-col justify-center gap-5 items-center text-4xl font-bold -rotate-90">
          <p>Thanks To Our</p>
          <span className="text-transparent [-webkit-text-stroke:1px_white] text-8xl font-bold ">
            Sponsors
          </span>
        </div>
        <div
          className={`${bebus.className} mt-8 text-center flex flex-col items-center justify-center lg:flex lg:items-center lg:justify-center gap-5`}
        >
          <div className="flex gap-2 flex-col ">
            <h1 className="text-center uppercase font-bold text-4xl md:text-5xl text-white text-glow-p">
              platinum sponsor
            </h1>
            <div className="border-t border-gray-500 w-full mx-auto" />
            <div className="flex gap-4 flex-wrap text-2xl sm:text-3xl lg:text-4xl items-center justify-center overflow-visible max-w-[280px] sm:max-w-[400px] lg:max-w-[500px]">
              {sponsors
                .filter((sponsor) => sponsor.Category === "Platinum")
                .map((sponsor, index) => (
                  <div
                    key={index}
                    className="w-auto h-8 sm:h-16 lg:h-[70px] aspect-square flex items-center justify-center object-cover"
                  >
                    <Link href={sponsor.SocialLink}>
                      <ImgKT src={sponsor.Imgpath} alt={sponsor.Name} />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="text-center uppercase font-bold text-3xl text-glow-y">
              Gold sponsors
            </h1>
            <div className="border-t border-gray-500 w-full mx-auto" />
            <div className="flex gap-2  flex-wrap text-2xl sm:text-3xl lg:text-4xl items-center justify-center overflow-visible max-w-[280px] sm:max-w-[380px] lg:max-w-[450px]">
              {sponsors
                .filter((sponsor) => sponsor.Category === "Gold")
                .map((sponsor, index) => (
                  <div
                    key={index}
                    className="w-auto h-14 sm:h-20 lg:h-[80px] -mb-4 aspect-square flex items-center justify-center object-cover"
                  >
                    <Link href={sponsor.SocialLink}>
                      <ImgKT src={sponsor.Imgpath} alt={sponsor.Name} />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="text-center uppercase font-bold text-2xl text-glow-s">
              Silver sponsors
            </h1>
            <div className="border-t border-gray-500 w-full mx-auto mb-4" />
            <div className="flex gap-4 flex-wrap text-2xl sm:text-3xl lg:text-4xl items-center justify-center overflow-visible max-w-[280px] sm:max-w-[380px] lg:max-w-[450px]">
              {sponsors
                .filter((sponsor) => sponsor.Category === "Silver")
                .map((sponsor, index) => (
                  <div
                    key={index}
                    className="w-auto h-10 sm:h-14 lg:h-[70px] -mb-2 aspect-square flex items-center justify-center object-cover"
                  >
                    <Link href={sponsor.SocialLink}>
                      <ImgKT src={sponsor.Imgpath} alt={sponsor.Name} />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex justify-center flex-col mb-4">
            <h1 className="text-center uppercase font-bold text-xl text-glow-b ">
              Bronze sponsors
            </h1>
            <div className="border-t border-gray-500 mb-4 w-full mx-auto" />
            <div className="flex gap-4 flex-wrap  text-2xl sm:text-3xl lg:text-4xl items-center justify-center overflow-visible max-w-[280px] sm:max-w-[400px] lg:max-w-[500px]">
              {sponsors
                .filter((sponsor) => sponsor.Category === "Bronze")
                .map((sponsor, index) => (
                  <div
                    key={index}
                    className="w-auto h-10 sm:h-14 lg:h-[60px] -mb-2 aspect-square flex items-center justify-center object-cover"
                  >
                    <Link href={sponsor.SocialLink}>
                      <ImgKT src={sponsor.Imgpath} alt={sponsor.Name} />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
