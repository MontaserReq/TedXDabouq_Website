import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // يمكنك تعديل الأوزان حسب الحاجة
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"], // خط Bebas Neue متاح فقط بوزن واحد
});

export const metadata: Metadata = {
  title: "TEDxDabouq25",
  description: "TEDx Dabouq 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${bebasNeue.variable} antialiased bg-primary-gray`}
      >
        {children}
      </body>
    </html>
  );
}
