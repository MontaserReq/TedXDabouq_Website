import Link from "next/link";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`${className} w-full text-white py-6 flex flex-col font-bold items-center justify-center px-6`}
    >
      
      {/* النصوص */}
      <p className="text-md">© 2025 TEDxDabouq. All rights reserved.</p>
      <p className="text-md">
        Designed and Developed by{" "}
        <Link
          href={
            "https://www.instagram.com/floppy.it?igsh=MTNmczN6MHZtZTBlbA=="
          }
          className="text-primary-red font-bold text-xl animate-pulse"
        >
          Floppy
        </Link>
      </p>
    </footer>
  );
}
