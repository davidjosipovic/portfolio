import type { Metadata } from "next";
import { open_sans } from "./font";

import "./globals.css";
import Navbar from "@/components/navbar";



export const metadata: Metadata = {
  title: "David Josipović",
  description: "David's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={open_sans.className}>
      <body className="bg-dark-blue" >
      <Navbar/>
        {children}
        </body>
    </html>
  );
}
