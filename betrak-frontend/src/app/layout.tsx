import type { Metadata } from "next";
import { Lato, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./SharedComponents/Navbar/Navbar";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Betrak",
  description:
    "Betrak uses AI to predict your social media addiction level — high, medium or low and gives you personalized tips to build healthier digital habits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "bg-[#0c121f]", lato.variable, jakartaSans.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
