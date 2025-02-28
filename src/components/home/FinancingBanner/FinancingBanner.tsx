import React from "react";
import { financingData } from "@/content/home/financingData";
import Button from "@/components/ui/Button";

const FinancingBanner = () => {
  return (
    <div className="relative w-full bg-tertiary text-white max-lg:text-center px-6 md:px-12 py-6 rounded-3xl flex gap-9 lg:gap-0 flex-wrap items-center justify-between">
      {/* Left Section: Title & Description */}
      <div>
        <h2 className="text-2xl  md:text-3xl font-bold">{financingData.title}</h2>
        <p className="text-lg md:text-xl mt-2">{financingData.description}</p>
      </div>

      {/* Right Section: Small Text & Button */}
      <div className="flex flex-col items-end space-y-2">
        <p className="text-lg">{financingData.applyText}</p>
        <Button text={financingData.buttonText} className="bg-primary"/>
      </div>
    </div>
  );
};

export default FinancingBanner;
