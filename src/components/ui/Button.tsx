import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 text-white font-bold text-lg rounded-full shadow-[0_6px_0_#5B3E75] transition-all duration-200 hover:shadow-[0_2px_0_#5B3E75] hover:translate-y-1 active:shadow-none active:translate-y-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
