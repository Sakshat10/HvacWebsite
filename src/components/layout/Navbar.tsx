"use client";
import { useState } from "react";
import review from "@/content/navbar/review";
import topBanner from "@/content/navbar/topBanner";
import emergency from "@/content/navbar/emergency";
import navlinks from "@/content/navbar/navlinks";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cta from "@/content/navbar/ctaBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-black">
         {/*********************  Top CTA Bar (Visible on sm and md screens) ************************************/}
         <div className="w-full lg:hidden flex">
        <a href="tel:7702326523" className="w-1/2 bg-primary text-white font-bold text-center py-3">
          {cta.heading1} <br /> {cta.number}
        </a>
        <a href="/quote" className="w-1/2 bg-tertiary text-white font-bold text-center py-3">
          {cta.heading2} <br /> {cta.subheading}
        </a>
      </div>
      {/*********************  Review (Visible on lg and above) ************************************/}
      <div className="hidden lg:flex bg-primary text-white justify-between font-bold text-xl items-center px-9 lg:px-16 py-4">
        <div><h1>{review.title}</h1></div>
        <div><h1>{review.country}</h1></div>
      </div>

      {/*********************  Main Navbar ************************************/}
      <div className="bg-white lg:bg-white lg:px-16 px-10 py-6 ">
        <div className="flex justify-between items-center">
          <div className=" font-semibold text-black lg:hidden text-2xl">LOGO</div>
          {/* Hamburger Menu for sm and md screens */}
          <div className="lg:hidden text-black">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Desktop View: Top Banner + Emergency + NavLinks */}
        <div className="hidden lg:flex justify-between items-start gap-10 pb-10">
          {/* Top Banner */}
          <div>
            <div className="text-primary font-semibold text-2xl mb-6">
              <p>{topBanner.heading}</p>
              <p>{topBanner.subheading}</p>
            </div>
            <Button text="VIEW SPECIALS" className="bg-primary"  />
          </div>

          {/* Emergency */}
          <div>
            <div className="font-semibold text-black text-2xl mb-6">
              <p>{emergency.heading}</p>
              <p className="text-primary font-bold mt-3 text-3xl text-center">{emergency.subheading}</p>
            </div>
            <Button text="BOOK NOW!" className="bg-tertiary" />
          </div>
        </div>

        {/* NavLinks (Visible on lg and above) */}
       {/* NavLinks (Visible on lg and above) */}
<ul className="hidden lg:flex justify-center items-center gap-20 mt-4">
  {navlinks.map((link, index) => (
    <li key={index}>
      <a
        href={link.href}
        className="text-lg font-semibold text-gray-800 tracking-wide transition-all duration-300 hover:text-primary relative"
      >
        {link.label}
        {/* Underline effect for active page */}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  ))}
</ul>

      </div>

      {/*********************  Mobile Drawer (sm and md screens) ************************************/}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="lg:hidden fixed top-0 right-0 w-4/3 h-screen bg-white z-50 p-10 overflow-y-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
              className="absolute top-4 right-6"
            >
              <X size={32} />
            </button>

            {/* NavLinks (Inside Mobile Menu) */}
            <ul className="flex flex-col gap-6 mb-8">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-2xl hover:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Top Banner (Inside Mobile Menu) */}
            <div className="mb-8">
              <div className="text-primary font-semibold text-2xl mb-4">
                <p>{topBanner.heading}</p>
                <p>{topBanner.subheading}</p>
              </div>
              <Button text="VIEW SPECIALS" className="bg-primary" />
            </div>

            {/* Emergency Section (Inside Mobile Menu) */}
            <div className="mb-8">
              <div className="font-semibold text-black text-2xl mb-4">
                <p>{emergency.heading}</p>
                <p className="text-primary font-bold mt-3 text-center">{emergency.subheading}</p>
              </div>
              <Button text="BOOK NOW!" className="bg-tertiary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

   
    </div>
  );
}

export default Navbar;
