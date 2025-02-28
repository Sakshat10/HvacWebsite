"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import TestimonialCarousel from "./TestimonialCarousel";
import review from "@/content/home/review";

const Testimonial = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
    <div
      className="hidden lg:block absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url("/images/hero.webp")` }}
    >
      <div
        className="hidden lg:block absolute inset-0 bg-primary opacity-70"
        style={{
          clipPath: "polygon(0 0, 80% 0, 55% 100%, 0% 100%)",
        }}
      />
    </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-around">
        {/* Left Side: Text Content */}
        <div className="lg:max-w-md w-full text-white">
          <h4 className="text-orange-400 font-bold uppercase">Reviews</h4>
          <h2 className="text-3xl md:text-4xl font-bold">
            {review.heading}
          </h2>
          <p className="mt-4">
           {review.subheading}
          </p>
          <div className="mt-4 bg-white p-3 rounded-lg flex items-center  shadow-lg">
            <img src="/images/company-logo.webp" alt="DeanWorks Heating & Air" className="w-10 h-10" />
            <div className="ml-3">
              <h3 className="text-black font-bold">{review.title}</h3>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 text-sm pt-4">{review.value}</p>
            </div>
          </div>
        </div>

        <div className="lg:max-w-lg w-full mt-10 lg:mt-0">
          <TestimonialCarousel />
        </div>
      </div>
    </section>

);
};

export default Testimonial;
