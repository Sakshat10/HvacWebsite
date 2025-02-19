"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "@/content/home/faq";
import Button from "@/components/ui/Button";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-primary text-sm font-semibold">FAQ</h2>
      <h3 className="text-3xl font-bold text-primary my-4">
        Dean Works Heating & Cooling FAQs
      </h3>

      <div className="max-w-2xl mx-auto text-left">
        {faqData.map((item, index) => (
          <div key={index} className="border-t border-gray-300 overflow-hidden">
            <button
              className="w-full py-4 flex justify-between items-center text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="text-primary">{openIndex === index ? "−" : "+"}</span>
            </button>

            {/* Animated FAQ Content */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="pb-4 text-gray-600">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-xl font-semibold text-primary mb-5">
          More Questions? Contact Us Today!
        </p>
        <Button text="Contact Us" className="bg-primary lg:w-1/4 md:w-1/2" />
      </div>
    </section>
  );
};

export default FAQ;
