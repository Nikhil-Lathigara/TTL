import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card group rounded-2xl overflow-hidden transition-all duration-300 border-2 p-2 bg-white"
      style={{ 
        animationDelay: `${index * 100}ms`,
        borderColor: isHovered ? product.borderColor : '#e5e7eb',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 25px -5px rgba(0, 0, 0, 0.1)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative rounded-t-xl bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center p-3 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-110 rounded-t-lg"
        />
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>

        {/* Support Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.supports.map((support, idx) => (
            <span
              key={idx}
              className="support-tag inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white border border-gray-200"
            >
              <span 
                className="w-1.5 h-1.5 rounded-full" 
                style={{ backgroundColor: product.colors[0] }}
              ></span>
              <span className="text-gray-700">{support}</span>
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-lg font-bold" style={{ fontFamily: "'Sora', sans-serif", color: product.borderColor }}>
              ${product.price.toFixed(2)}
            </div>
            <div className="text-xs text-gray-500">
              {product.pricePerDay}
            </div>
          </div>
          
          <button 
            className="w-fit p-2.5 ml-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2"
            style={{
              backgroundColor: isHovered ? product.borderColor : 'transparent',
              color: isHovered ? '#ffffff' : product.borderColor,
              borderColor: product.borderColor
            }}
          >
            Shop Now
            <ArrowRight className="w-4 h-4"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;