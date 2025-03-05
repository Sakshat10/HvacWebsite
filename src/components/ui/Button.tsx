"use client"
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  const handleClick = () => {
    // Scroll to the "form" section
    const formSection = document.getElementById("form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }

    // Execute additional custom onClick function if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-full px-6 py-4 text-white font-bold text-2xl rounded-full shadow-[0_6px_0_#5B3E75,0_8px_12px_rgba(91,62,117,0.4)] transition-all duration-200 hover:shadow-[0_2px_0_#5B3E75,0_4px_8px_rgba(91,62,117,0.2)] hover:translate-y-1 active:shadow-none active:translate-y-2 uppercase ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
