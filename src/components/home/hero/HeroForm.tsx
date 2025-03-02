"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Handle checkbox separately
    const checked =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : undefined;

    setFormData((prevData) => ({
      ...prevData,
      [name]: checked ?? value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    toast.success("Form has been submitted successfully!", {
      position: "top-right",
    });


    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
      className="relative bg-cover bg-center  flex items-center justify-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
      id="form"
    >

      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-secondary bg-opacity-90 p-5 lg:p-10 rounded-2xl shadow-xl w-full max-w-md md:max-w-3xl lg:max-w-md">
        <h2 className="text-white text-4xl  font-extrabold mb-4 text-center leading-tight">
          Let Us Help You!
        </h2>
        <p className="text-white text-md  mb-10 text-center">
          Boston-Comfort-Pros – Your Comfort, Our Priority
        </p>

        <form onSubmit={handleSubmit} className="space-y-8 text-black">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we assist you? *"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition resize-none"
          />

          <button
            type="submit"
            className="w-full p-4 bg-tertiary text-white text-xl font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300"
          >
            Request Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
