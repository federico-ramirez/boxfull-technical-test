import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import boxLogo from "@/assets/Logo-Boxful.png";
import "./globals.css";
import Image from "next/image";
import '@ant-design/v5-patch-for-react-19';

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
    <header className="w-full bg-white">
      <Image src={boxLogo} alt="Boxful Logo" height={50} className="mx-4" />
    </header>
  )

  return (
    <html lang="en">
      <body
        className={`${albertSans.className} w-full h-full min-h-full bg-gray-custom`}
      >
        {header}
        {children}
      </body>
    </html>
  );
}
