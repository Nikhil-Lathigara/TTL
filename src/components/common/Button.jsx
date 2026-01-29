import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  showArrow = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-lg";
  
  const variants = {
    primary: "bg-[#E63946] text-white hover:bg-[#d62839] hover:scale-105",
    secondary: "bg-white text-[#E63946] border-2 border-[#E63946] hover:bg-[#E63946] hover:text-white hover:scale-105",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 hover:scale-105",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 shadow-none hover:shadow-none"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-full",
    md: "px-6 py-3 text-base rounded-full",
    lg: "px-8 py-4 text-lg rounded-full"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};

export default Button;
