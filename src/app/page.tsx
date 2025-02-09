import Image from "next/image";
import Aboutus from "../../components/Aboutus";
import Tickets from "../../components/Tickets";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Speakers from "../../components/Speakers";
import "./globals.css";
import Hero from "../../components/Hero";
import Sponsors from "../../components/Sponsors";

export default function Home() {
  return (
    <main
      className="snap-y snap-mandatory scroll-smooth overflow-y-scroll scroll-hidden h-screen pd:px-8 -z-10   bg-cover bg-center bg-no-repeat"
    >
      {/* Hero Section */}
      <section id="#Hero" className="container mx-auto px-4 ">
        <Hero className="h-screen snap-start flex justify-center" />
      </section>
      {/* About Us Section */}
      <section id="aboutus" className="container mx-auto px-4 ">
        <Aboutus className="h-screen snap-start flex justify-center" />
      </section>
      {/* Speakers Section */}
      <section id="speakers" className="container mx-auto px-4 ">
        <Speakers className="h-screen snap-start flex justify-center" />
      </section>
      {/* Contact Section */}
      <section id="contact" >
        <Contact className="h-screen snap-start flex justify-center" />
      </section>
      <section id="sponsors" className="container mx-auto px-4 ">
        <Sponsors className="h-screen snap-start flex justify-center" />
      </section>
      {/* Tickets Section */}
      <section id="tickets" className="relative bg-[url('/images/JordanMap.svg')] bg-cover bg-center bg-no-repeat">
        <Tickets className="h-screen snap-start flex justify-center" />
      </section>
    </main>
  );
}
