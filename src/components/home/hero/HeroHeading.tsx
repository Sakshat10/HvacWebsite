"use client";

import { motion } from "framer-motion";
import heroData from "@/content/home/hero";
import Button from "@/components/ui/Button";

function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2}} 
      viewport={{ once: true, amount: 0.2 }} 
      className="flex flex-col gap-6 justify-center"
    >
      <h1 className="text-bold text-3xl text-justify">{heroData.title}</h1>
      <p className="text-bold text-lg text-justify">{heroData.description}</p>
      <h1 className="text-tertiary text-3xl max-lg:text-center">{heroData.number}</h1>
      <Button text={heroData.ButtonText} className="bg-tertiary lg:w-2/3" />
    </motion.div>
  );
}

export default HeroHeading;
