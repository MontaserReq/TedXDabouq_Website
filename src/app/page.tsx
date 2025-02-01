import Image from "next/image";
import Header from "../../components/Header";
import Aboutus from "../../components/AboutUs/Aboutus";
import Schedule from "../../components/Schedule";
import Tickets from "../../components/Tickets";
import Media from "../../components/Media";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Speakers from "../../components/Speakers";
import "./globals.css";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory scroll-smooth overflow-y-scroll scroll-hidden h-screen  pd:px-8">
      {/* Hero Section */}
      <Hero className="h-screen snap-start flex justify-center" />

      {/* About Us Section */}
      <Aboutus className="h-screen snap-start flex justify-center" />

      {/* Speakers Section */}
      <Speakers className="h-screen snap-start flex justify-center" />

      {/* Schedule Section */}
      <Schedule className="h-screen snap-start flex justify-center" />

      {/* Tickets Section */}
      <Tickets className="h-screen snap-start flex justify-center" />

      {/* Media Section */}
      <Media className="h-screen snap-start flex justify-center" />

      {/* Contact Section */}
      <Contact className="h-screen snap-start flex justify-center" />

      {/* Footer Section */}
      <Footer className="h-screen snap-start flex justify-center" />
    </main>
  );
}
