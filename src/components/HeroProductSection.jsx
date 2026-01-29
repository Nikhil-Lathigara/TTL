import React, { useState } from 'react';
import ProductCard from './common/ProductCard';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';

const PRODUCTS = [
  {
    id: 1,
    name: 'UN-LOCK+',
    description: 'Hormone-supporting muscle formula for endurance, fatigue a...',
    price: 149.00,
    pricePerDay: '$0.75 per day',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80',
    supports: ['Endurance', 'Recovery'],
    colors: ['#E63946', '#FFB4A2'],
    borderColor: '#E63946',
    hotspot: { top: '55%', left: '55%' },
  },
  {
    id: 2,
    name: 'Flexify-HA',
    description: 'Joint support formula for cartilage, flexibility and joint health',
    price: 149.00,
    pricePerDay: '$0.75 per day',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&q=80',
    supports: ['Joint Health'],
    colors: ['#4A90E2', '#B4D7FF'],
    borderColor: '#4A90E2',
    hotspot: { top: '70%', left: '63%' },
  },
  {
    id: 3,
    name: 'EPO-Equine',
    description: 'All-natural, blood builder optimises oxygen levels for peak performance',
    price: 149.00,
    pricePerDay: '$0.75 per day',
    image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=400&q=80',
    supports: ['Oxygen Levels'],
    colors: ['#E63946', '#FFB4A2'],
    borderColor: '#E63946',
    hotspot: { top: '45%', left: '45%' },
  },
  {
    id: 4,
    name: 'Bleeder Shield',
    description: 'One-of-a-kind respiratory formula, Now comes in a powder',
    price: 149.00,
    pricePerDay: '$0.75 per day',
    image: 'https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?w=400&q=80',
    supports: ['Lungs Support'],
    colors: ['#E63946', '#FFB4A2'],
    borderColor: '#E63946',
    hotspot: { top: '50%', left: '37%' },
  },
  {
    id: 5,
    name: 'EQ-Renew',
    description: 'Natural recovery formula on optimal healing',
    price: 149.00,
    pricePerDay: '$0.75 per day',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&q=80',
    supports: ['Recovery'],
    colors: ['#52B788', '#B7E4C7'],
    borderColor: '#52B788',
    hotspot: { top: '43%', left: '60%' },
  },
];

const HeroProductSection = () => {
  const [selectedId, setSelectedId] = useState(1);
  const activeProduct = PRODUCTS.find(p => p.id === selectedId) || PRODUCTS[0];

  return (
    <>
      {/* Banner Section */}
      <section className="relative h-[400px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/banner.jpg"
            alt="Horse racing"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="relative h-full flex items-center">
          <Container>
            <div className="max-w-3xl animate-fade-in-up text-right ml-auto">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Keep Your Horse <br />
                <span className="text-[#E63946]">Race-Ready</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                With our all-natural, performance-enhancing solutions.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Interactive Product Section */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <Container>
          <SectionHeader 
            title="Support Your Horse,"
            highlight="Head to Hoof"
            description="Click the hotspots on the horse to see how our formulas help achieve peak performance."
            align="left"
            ghostText="PERFORM"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left: Dynamic Product Card */}
            <div className="lg:col-span-4 order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="w-full max-w-sm">
                <ProductCard 
                  key={activeProduct.id}
                  product={activeProduct} 
                  index={0} 
                />
              </div>
            </div>

            {/* Right: Interactive Image with Hotspots */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-50 aspect-[16/10]">
                <img
                  src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=80"
                  alt="Performance Horse"
                  loading="lazy"
                  className="w-full h-full object-cover scale-x-[-1]"
                />

                {/* Hotspot Layer */}
                {PRODUCTS.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedId(product.id)}
                    className={`absolute rounded-full border-2 border-white transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 z-20 group
                      w-4 h-4 md:w-5 md:h-5
                      ${selectedId === product.id 
                        ? 'bg-[#E63946] scale-125 shadow-[0_0_20px_rgba(230,57,70,0.6)]' 
                        : 'bg-white/80 hover:bg-white shadow-lg'
                      }`}
                    style={{ top: product.hotspot.top, left: product.hotspot.left }}
                    aria-label={`Select ${product.name}`}
                  >
                    {selectedId === product.id && (
                      <span className="absolute inset-0 rounded-full bg-[#E63946] animate-ping opacity-30"></span>
                    )}
                    <span className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30`}>
                      {product.name}
                    </span>
                  </button>
                ))}

                {/* Mobile Selector */}
                <div className="lg:hidden absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
                    {PRODUCTS.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => setSelectedId(product.id)}
                        className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap
                          ${selectedId === product.id
                            ? 'bg-[#E63946] text-white shadow-lg scale-105'
                            : 'bg-white/95 text-gray-800 hover:bg-white'
                          }`}
                      >
                        {product.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Pills */}
              <div className="hidden lg:flex flex-wrap gap-3 mt-10">
                {PRODUCTS.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedId(product.id)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300
                      ${selectedId === product.id
                        ? 'bg-[#E63946] text-white shadow-xl scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroProductSection;
