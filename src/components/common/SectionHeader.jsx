import React from 'react';

const SectionHeader = ({ 
  title, 
  highlight, 
  description, 
  align = 'center',
  className = '' 
}) => {
  const alignmentStyles = {
    left: 'text-left lg:mx-0',
    center: 'text-center mx-auto',
    right: 'text-right lg:mx-0 lg:ml-auto'
  };

  return (
    <div className={`mb-16 relative ${alignmentStyles[align]} ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10 leading-tight">
        {title} {highlight && <span className="text-[#E63946] relative inline-block">
          {highlight}
        </span>}
      </h2>
      <div className={`w-24 h-1.5 bg-[#E63946] mb-8 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
      {description && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
