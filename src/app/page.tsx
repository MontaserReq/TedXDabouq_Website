import Image from "next/image";
import Header from "../../components/Header";
import Aboutus from "../../components/Aboutus";
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
      <section id="#Hero">
      <Hero className="h-screen snap-start flex justify-center" />
      </section>
      {/* About Us Section */}
      <section id="aboutus">
      <Aboutus className="h-screen snap-start flex justify-center" />
      </section>
      {/* Speakers Section */}
      <section id="speakers">
      <Speakers className="h-screen snap-start flex justify-center" />
      </section>
      {/* Schedule Section */}
      <section id="schedule">
      <Schedule className="h-screen snap-start flex justify-center" />
      </section>
      {/* Tickets Section */}
      <section id="tickets">
      <Tickets className="h-screen snap-start flex justify-center" />
      </section>
      {/* Media Section */}
      <section id="media">
      <Media className="h-screen snap-start flex justify-center" />
      </section>
      {/* Contact Section */}
      <section id="contact">
      <Contact className="h-screen snap-start flex justify-center" />
      </section>
      {/* Footer Section */}
      <section id="footer">
      <Footer className="h-screen snap-start flex justify-center" />
      </section>
    </main>
  );
}
