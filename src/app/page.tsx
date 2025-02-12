import Aboutus from "../../components/Aboutus";
import Tickets from "../../components/Tickets";
import Contact from "../../components/Contact";
import Speakers from "../../components/Speakers";
import "./globals.css";
import Hero from "../../components/Hero";
import Sponsors from "../../components/Sponsors";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory scroll-smooth overflow-y-scroll scroll-hidden h-screen bg-cover bg-center bg-no-repeat">
      <section id="Hero" className="w-full flex justify-center items-center">
        <Hero className="h-screen w-full snap-start flex justify-center items-center" />
      </section>
      <section id="aboutus" className="w-full flex justify-center items-center">
        <Aboutus className="h-screen w-full snap-start flex justify-center items-center" />
      </section>
      <section
        id="speakers"
        className="w-full flex justify-center items-center"
      >
        <Speakers className="h-screen w-full snap-start flex justify-center items-center" />
      </section>
      <section id="contact" className="w-full flex justify-center items-center">
        <Contact className="h-screen w-full snap-start flex justify-center items-center" />
      </section>
      <section
        id="sponsors"
        className="w-full flex justify-center items-center"
      >
        <Sponsors className="h-screen w-full snap-start flex justify-center items-center" />
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
