import Aboutus from "../components/Home/Aboutus";
import Tickets from "../components/Home/Tickets";
import Contact from "../components/Home/Contact";
import Ted from "../components/Home/Ted";
import "./globals.css";
import Hero from "../components/Home/Hero";
import Sponsors from "../components/Home/Sponsors";
import SpeakersWrapper from "@/components/Home/SpeakersWrapper";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory scroll-smooth overflow-y-scroll scroll-hidden h-screen bg-cover bg-center bg-no-repeat ">
      <section
        id="Hero"
        className="w-full flex justify-center items-center bg-[url('../../public/images/Cover.svg')] bg-cover bg-[30%] bg-no-repeat "
      >
        <Hero className="h-screen w-full snap-start flex justify-center items-center" />
      </section>
      <section
        id="ted"
        className="w-full flex justify-center items-center bg-[url('../../public/images/XTed.png')] bg-cover bg-[#0a0a0a] bg-opacity-100 bg-[50%] bg-no-repeat"
      >
        <Ted className="h-screen w-full snap-start flex justify-center items-center" />
      </section>
      <section
        id="aboutus"
        className="w-full flex justify-center items-center bg-[url('../../public/images/Cover.svg')] bg-cover bg-[60%] bg-no-repeat"
      >
        <Aboutus className="h-screen w-full snap-start flex justify-center items-center" />
      </section>
      <section
        id="speakers"
        className="w-full flex justify-center items-center bg-[url('../../public/images/Cover1.svg')] bg-cover bg-[60%] bg-no-repeat "
      >
        <SpeakersWrapper className="h-screen w-full snap-start flex justify-center items-center" />
      </section>
      <section
        id="sponsors"
        className="w-full flex justify-center items-center bg-[url('../../public/images/Cover.svg')] bg-cover bg-[60%] bg-no-repeat "
      >
        <Sponsors className="h-screen w-full snap-start flex justify-center items-center " />
      </section>
      <section
        id="contact"
        className="w-full flex justify-center items-center  bg-[url('../../public/images/Cover1.svg')] bg-cover bg-[30%] bg-no-repeat "
      >
        <Contact className="h-screen w-full snap-start flex justify-center items-center " />
      </section>
      <section
        id="tickets"
        className="relative bg-[url('/images/JordanMap.svg')] bg-cover bg-center bg-no-repeat w-full flex justify-center items-center"
      >
        <Tickets className="h-screen w-full snap-start flex justify-center items-center" />
      </section>
    </main>
  );
}
