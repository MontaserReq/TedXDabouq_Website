import Footer from "./Footer";
import Image from "next/image";

interface ContactProps {
  className: string;
}

export default function Contact({ className }: ContactProps) {
  return (<>
    <div
      id="contact"
      className={`${className}  min-h-screen flex flex-col items-center justify-center relative w-full`}
    >
      {/* الصور */}
      {/* <Image
        alt="Man"
        width={500}
        height={800}
        className="z-50 bottom-0 -left-[25%] absolute h-[1000px] w-auto object-cover"
        src="/images/ManandWoman.png"
      />
      <Image
        alt="Woman"
        width={500}
        height={800}
        className="bottom-0 right-0 z-50 absolute h-[850px] w-auto object-cover"
        src="/images/ .png"
      /> */}

      {/* النصوص */}
      <div className="relative container flex flex-col items-center">
        <h1 className="text-[12vw] leading-[10vw] text-white font-bold tracking-[-0.3vw] text-center font-bebas">
          GET INVOLVED
          <br />
          WITH TEDXDABOUQ
        </h1>
        <h1 className="absolute top-0 text-[12vw] leading-[10vw] text-transparent font-bold tracking-[-0.3vw] text-center font-bebas z- [-webkit-text-stroke:0.1px_white]">
          GET INVOLVED
          <br />
          WITH TEDXDABOUQ
        </h1>
      </div>

      {/* شريط الخلفية */}

      <div className="absolute bg-[#b4001e] w-full bottom-0 right-0 h-[30vh]" />
      {/* الفوتر */}
      
    </div>
    </>
  );
}
