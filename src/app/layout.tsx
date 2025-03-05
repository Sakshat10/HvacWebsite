import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



const style = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });



export const metadata: Metadata = {
  title: "DeanWorks",
  description: "website for DeanWorks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={style.className}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
