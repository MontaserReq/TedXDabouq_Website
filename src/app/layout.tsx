import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { auth } from "@/lib/auth";
import { Toaster } from "sonner";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${poppins.variable} ${bebasNeue.variable} antialiased bg-primary-gray`}
        >
          <Toaster richColors position="top-center" />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
