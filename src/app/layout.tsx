import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kaveesha Induwara | Electronics, Embedded Systems & Edge AI Engineer",
  description:
    "Portfolio and Interactive CV of Kaveesha Induwara — Electronics & IT Honours Undergraduate at the University of Colombo specializing in Embedded Systems, DSP, Edge AI, and IoT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-[#F7F7F5] text-[#07291E] selection:bg-[#B4F256] selection:text-[#07291E]">
        {children}
      </body>
    </html>
  );
}
