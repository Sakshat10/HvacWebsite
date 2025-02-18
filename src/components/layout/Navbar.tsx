"use client"
import { useState } from "react";
import review from "@/content/navbar/review";
import topBanner from "@/content/navbar/topBanner";
import emergency from "@/content/navbar/emergency";
import navlinks from "@/content/navbar/navlinks";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-black">

      {/*********************  Review (Visible on lg and above) ************************************/}
      <div className="hidden lg:flex bg-primary text-white justify-between font-bold text-xl items-center px-9 lg:px-16 py-4">
        <div><h1>{review.title}</h1></div>
        <div><h1>{review.country}</h1></div>
      </div>

      {/*********************  Main Navbar ************************************/}
      <div className="bg-dark lg:bg-white lg:px-16 px-10 py-6 ">

<div className="flex justify-between items-center">

      <div className="text-white font-semibold lg:hidden text-2xl">LOGO</div>
        {/* Hamburger Menu for sm and md screens */}
        <div className="lg:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
</div>

        {/* Desktop View: Top Banner + Emergency + NavLinks */}
        <div className="hidden lg:flex  justify-between items-start gap-10 pb-10">
          {/* Top Banner */}
          <div>
            <div className="text-primary font-semibold text-2xl mb-6">
              <p>{topBanner.heading}</p>
              <p>{topBanner.subheading}</p>
            </div>
            <Button text="VIEW SPECIALS" className="bg-primary" />
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
        <ul className="hidden lg:flex justify-between  items-center gap-8">
          {navlinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-2xl hover:text-primary">
                {link.label}
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