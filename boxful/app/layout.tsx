import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import boxLogo from "@/assets/Logo-Boxful.png";
import "./globals.css";
import Image from "next/image";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "boxful",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="w-screen bg-white">
      <Image src={boxLogo} alt="Boxful Logo" height={50} className="mx-4" />
    </header>
  )

  return (
    <html lang="en">
      <body
        className={`${albertSans.className} w-full h-screen min-h-screen antialiased`}
      >
        {header}
        {children}
      </body>
    </html>
  );
}
