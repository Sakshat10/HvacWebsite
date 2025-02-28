import React from "react";
import { serviceData } from "@/content/home/serviceData";
import Button from "@/components/ui/Button";

const ServiceSection: React.FC = () => {
  return (
    <section className="relative bg-primary text-white py-12 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-justify lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold text-tertiary leading-tight">
            {serviceData.title}
          </h2>
          <p className="mt-4 text-lg">{serviceData.description}</p>
          <Button text={serviceData.buttonText} className="bg-tertiary lg:w-[20vw] mt-4"/>
        </div>

        {/* Right Image Section */}
        <div className="lg:absolute lg:-top-20 lg:right-0 lg:w-1/2 flex justify-center">
          <img
           src={serviceData.imageUrl} 
           alt="Technician"
           className="w-90 h-90  lg:w-[50vw] lg:h-[70vh] object-contain"/>
          </div>

      </div>
    </section>
  );
};

export default ServiceSection;
