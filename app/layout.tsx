import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import "./globals.css";
// import { Satoshi } from "../src/assets/fonts/satoshi";
import localFont from "next/font/local";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "White Bare Shoulder Crepe Midi Dress - Aleena",
  description:
    "Indulge in luxurious elegance with our Bare shoulder Crepe Midi dress. Perfect for any occasion.",
  icons: {
    icon: [
      {
        url: "/globe.svg",
        type: "image/svg+xml",
      },
    ],
  },
    generator: 'v0.app'
};

// Load local Satoshi font
const satoshi = localFont({
  src: [
    {
      path: "../src/assets/fonts/Satoshi-Regular.otf",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable}`}>
        {/* <body className={`${satoshi.variable} font-sans`}> */}

        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
