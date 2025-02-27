import { GoArrowDownRight } from "react-icons/go";
import Image from "next/image";

interface ContactProps {
  className?: string;
}

export default function Contact({ className = "" }: ContactProps) {
  return (
    <section
      id="contact"
      className={`${className} min-h-screen flex flex-col items-center justify-center relative w-full text-white`}
    >
      <div className="relative w-full h-full max-w-6xl text-center flex flex-col items-center">
        <h1 className="text-[10vw] md:text-[6vw] text-nowrap leading-tight font-bold tracking-tight font-bebas absolute top-[50%] left-[50%] -translate-x-[50%]">
          GET INVOLVED
          <br />
          WITH <span className="text-secondary-red ">TEDX</span>DABOUQ
        </h1>
        <h1
          className="absolute top-[50%] left-[50%] text-nowrap -translate-x-[50%] text-[10vw] md:text-[6vw] leading-tight font-bold tracking-tight text-transparent font-bebas z-10"
          style={{ WebkitTextStroke: "1px white" }}
        >
          GET INVOLVED
          <br />
          WITH <span className="text-secondary-red"  style={{ WebkitTextStroke: "0px white" }}>TEDx</span>DABOUQ
        </h1>
        <div className="relative w-full h-full flex justify-between items-end mt-8 ">
          <Image
            src="/images/Ken.png"
            alt="Richard"
            width={300}
            height={300}
            className="hidden lg:block lg:-right-0  xl:-right-14 2xl:-right-40  absolute Z-30 -right-32  grayscale w-[48%] h-auto object-cover"
          />
          <Image
            src="/images/Rich2.svg"
            alt="Ken"
            width={300}
            height={300}
            className="grayscale hidden lg:block  lg:-left-20 xl:-left-36 2xl:-left-52  scale-x-[-1] w-[50%] absolute -left-56 z-20 h-auto object-cover"
          />
        </div>
      </div>
      <div className="bg-[#b4001e] z-10 relative w-full bottom-0 left-0 right-0 h-[20vh] flex flex-col items-center justify-center text-center py-6 px-4">
        <p className="text-lg md:text-xl max-w-2xl">
          Become a part of the TEDxDabouq journey by supporting the event.
        </p>
        <div className="text-white font-bold flex items-center gap-4 mt-4">
          <button className="hover:scale-110 transition-transform">
            <div className="bg-gray-900 rounded-full p-3">
              <GoArrowDownRight size={32} />
            </div>
          </button>
          <h3 className="text-lg md:text-xl">Partner With Us</h3>
        </div>
      </div>
    </section>
  );
}
