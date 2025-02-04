import { Poppins } from "next/font/google";

interface FooterProps {
  className: string;
}

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Footer = ({ className }: FooterProps) => {
  return (
    <footer id="footer" className={`${className}min-h-screen flex items-center justify-center  `}>
    <h1 className="text-4xl text-white font-semibold">Footer</h1>
  </footer>
  );
};

export default Footer;
