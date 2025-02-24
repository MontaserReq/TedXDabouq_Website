  "use client";

  import { useState, useEffect } from "react";
  import { Poppins } from "next/font/google";
  import Image from "next/image";

  const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
  });

  interface NavProps {
    className?: string;
  }

  export default function Nav({ className }: NavProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string>("");

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    // Setup the IntersectionObserver to track which section is in view
    useEffect(() => {
      const sections = document.querySelectorAll("section");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveLink(`#${entry.target.id}`);
            }
          });
        },
        { threshold: 0.5 } // Trigger when at least 50% of the section is visible
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }, []);

    return (
      <nav className={`${className} flex  justify-around items-center h-[30px] overflow-hidden mt-3`}>
        <div>
          <a href="#home">
            <Image
              src="/images/TedxLogo.svg"
              alt="TedxDabouqLogo"
              width={190}
              height={190}
              className="max-w-full max-h-full"
            />
          </a>
        </div>

        <div className="lg:flex justify-center items-center font-semibold hidden gap-[60px] text-xl ">
          <a
            href="#home"
            className={`${poppins.className} ${activeLink === "#home" ? "text-primary-red" : "text-white"} hover:text-primary-red uppercase py-2`}
          >
            Home
          </a>
          <a
            href="#ted"
            className={`${poppins.className} ${activeLink === "#ted" ? "text-primary-red" : "text-white"} hover:text-primary-red uppercase py-2`}
          >
            TedX
          </a>
          <a
            href="#aboutus"
            className={`${poppins.className} ${activeLink === "#aboutus" ? "text-primary-red" : "text-white"} hover:text-primary-red uppercase py-2`}
          >
            About
          </a>
          <a
            href="#speakers"
            className={`${poppins.className} ${activeLink === "#speakers" ? "text-primary-red" : "text-white"} hover:text-primary-red uppercase py-2`}
          >
            Speakers
          </a>
          <a
            href="#sponsors"
            className={`${poppins.className} ${activeLink === "#sponsors" ? "text-primary-red" : "text-white"} hover:text-primary-red uppercase py-2`}
          >
            Sponsors
          </a>
          <a
            href="#contact"
            className={`${poppins.className} ${activeLink === "#contact" ? "text-primary-red" : "text-white"} hover:text-primary-red uppercase py-2`}
          >
            Contact
          </a>
          <a
            href="#tickets"
            className={`${poppins.className} ${activeLink === "#tickets" ? "text-primary-red" : "text-white"} hover:text-primary-red uppercase py-2`}
          >
            Tickets
          </a>
        </div>

        <div
          className="lg:hidden w-12 h-12 text-6xl cursor-pointer font-bold text-secondary-red flex items-center justify-center"
          onClick={toggleMenu}
        >
          &times;
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className=" container mx-auto px-4 text-center bg-cover bg-center bg-no-repeat fixed top-0 right-0 lg:w-1/2 w-full h-full bg-cyan z-50 shadow-2xl transition-all duration-500 ease-in-out bg-primary-gray">
            <div className="flex flex-col p-4 h-full">
              <button
                onClick={closeMenu}
                className="self-end mr-16 mt-7 text-secondary-red font-bold text-6xl focus:outline-none"
              >
                &times;
              </button>

              <div className="flex flex-col space-y-2 mt-8">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className={`text-white font-semibold hover:text-primary-red text-4xl py-3 ${activeLink === "#home" ? "text-primary-red" : ""} text-center`}
                >
                  Home
                </a>
                <a
                  href="#ted"
                  onClick={closeMenu}
                  className={`text-white font-semibold hover:text-primary-red text-4xl py-3 ${activeLink === "#ted" ? "text-primary-red" : ""} text-center`}
                >
                  TedX
                </a>
                <a
                  href="#aboutus"
                  onClick={closeMenu}
                  className={`text-white font-semibold hover:text-primary-red text-4xl py-3 ${activeLink === "#aboutus" ? "text-primary-red" : ""} text-center`}
                >
                  About
                </a>
                <a
                  href="#speakers"
                  onClick={closeMenu}
                  className={`text-white font-semibold hover:text-primary-red text-4xl py-3 ${activeLink === "#speakers" ? "text-primary-red" : ""} text-center`}
                >
                  Speakers
                </a>
                <a
                  href="#sponsors"
                  onClick={closeMenu}
                  className={`text-white font-semibold hover:text-primary-red text-4xl py-3 ${activeLink === "#sponsors" ? "text-primary-red" : ""} text-center`}
                >
                  Sponsors
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className={`text-white font-semibold hover:text-primary-red text-4xl py-3 ${activeLink === "#contact" ? "text-primary-red" : ""} text-center`}
                >
                  Contact
                </a>
                <a
                  href="#tickets"
                  onClick={closeMenu}
                  className={`text-white font-semibold hover:text-primary-red text-4xl py-3 ${activeLink === "#tickets" ? "text-primary-red" : ""} text-center`}
                >
                  Tickets
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  }
