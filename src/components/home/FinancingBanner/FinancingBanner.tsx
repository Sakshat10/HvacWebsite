"use client";

import React from "react";
import { motion } from "framer-motion";
import { financingData } from "@/content/home/financingData";
import Button from "@/components/ui/Button";

const FinancingBanner = () => {
  return (
    <div className="relative w-full bg-tertiary text-white max-lg:text-center px-6 md:px-12 py-6 rounded-3xl flex gap-9 lg:gap-0 flex-wrap items-center justify-between">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">{financingData.title}</h2>
        <p className="text-lg md:text-xl mt-2">{financingData.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-end space-y-2"
      >
        <p className="text-lg">{financingData.applyText}</p>
        <Button text={financingData.buttonText} className="bg-primary" />
      </motion.div>
    </div>
  );
};

export default FinancingBanner;
