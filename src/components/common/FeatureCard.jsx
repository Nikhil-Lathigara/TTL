import React from 'react';

const FeatureCard = ({ icon: Icon, emoji, title, description, variant = 'light', className = '' }) => {
  const variants = {
    light: "bg-white border-gray-100 hover:shadow-xl",
    dark: "bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 hover:border-[#E63946]",
    accent: "bg-pink-50 border-pink-100 hover:bg-pink-100"
  };

  return (
    <div className={`p-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-2 text-center group ${variants[variant]} ${className}`}>
      <div className="mb-6 flex justify-center">
        {Icon ? (
          <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 ${variant === 'dark' ? 'bg-white/10 group-hover:bg-[#E63946]' : 'bg-[#E63946]/10 group-hover:bg-[#E63946]/20'}`}>
            <Icon className={`w-8 h-8 ${variant === 'dark' ? 'text-white' : 'text-[#E63946]'}`} />
          </div>
        ) : (
          <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
            {emoji}
          </div>
        )}
      </div>
      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${variant === 'dark' ? 'group-hover:text-[#E63946]' : 'text-gray-900 group-hover:text-[#E63946]'}`}>
        {title}
      </h3>
      <p className={`leading-relaxed ${variant === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
